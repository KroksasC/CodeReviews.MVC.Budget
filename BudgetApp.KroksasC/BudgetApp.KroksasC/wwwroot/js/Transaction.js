const transactionUrl = 'api/transaction';

let transactions = [];

document.addEventListener('DOMContentLoaded', () => {
    getTransactionData();
    populateCategoryFilter();
});

function openTransactionInput() {
    document.getElementById("add-transaction-form").style.display = "block";
}
function closeTransactionInput() {
    document.getElementById("add-transaction-form").style.display = "none";
}

function closeTransactionEditForm() {
    document.getElementById("edit-transaction-form").style.display = "none";
}

function getTransactionData() {
    fetch(transactionUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            transactions = data;
            _displayTransactions();
        })
        .catch(error => console.error('Error:', error));
}

function addTransaction() {
    const addAmountTextBox = document.getElementById('add-amount');
    const addDescriptionTextBox = document.getElementById('add-description');
    const addDateTimeTextBox = document.getElementById('add-date');
    const selectedCategoryRadio = document.querySelector('input[name="category"]:checked');

    const amount = parseFloat(addAmountTextBox.value.trim());
    const transactionDate = addDateTimeTextBox.value.trim();
    const description = addDescriptionTextBox.value.trim();
    const categoryId = selectedCategoryRadio ? parseInt(selectedCategoryRadio.value) : null;

    if (isNaN(amount) || amount <= 0) {
        alert("Amount must be a positive number.");
        return;
    }

    if (!transactionDate) {
        alert("Transaction date is required.");
        return;
    }

    if (description.length > 500) {
        alert("Description cannot be longer than 500 characters.");
        return;
    }

    if (!categoryId) {
        alert("Category is required.");
        return;
    }

    const transaction = {
        amount: amount,
        transactionDate: transactionDate,
        description: description,
        category: {
            id: categoryId
        }
    }

    fetch(transactionUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    })
        .then(response => response.json())
        .then(() => {
            console.log("Transaction added:", transaction);
            getTransactionData();
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteTransaction(id) {
    fetch(`${transactionUrl}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getTransactionData())
        .catch(error => console.error('Unable to delete item.', error));
}

function displayTransactionEditForm(id) {
    const transaction = transactions.find(item => item.id === id);

    document.getElementById('edit-amount').value = transaction.amount;
    document.getElementById('edit-description').value = transaction.description;
    _displayCategoriesInTransactionsEditForm(transaction);
    document.getElementById('edit-date').value = transaction.transactionDate.slice(0, 16);
    document.getElementById('edit-transaction-form').style.display = 'block';
    const saveButton = document.getElementById("save-transaction-btn");

    // Ensure only one event listener is added (avoiding multiple triggers)
    saveButton.onclick = function () {
        updateTransaction(id);
    };
}

function updateTransaction(index) {
    const newAmountTextBox = document.getElementById('edit-amount');
    const newDescriptionTextBox = document.getElementById('edit-description');
    const newCategorySelected = document.querySelector('input[name="category1"]:checked');
    const newDateSelected = document.getElementById('edit-date');

    const amount = parseFloat(newAmountTextBox.value.trim());
    const transactionDate = newDateSelected.value.trim();
    const description = newDescriptionTextBox.value.trim();
    const categoryId = newCategorySelected ? parseInt(newCategorySelected.value) : null;

    if (isNaN(amount) || amount <= 0) {
        alert("Amount must be a positive number.");
        return;
    }

    if (!transactionDate) {
        alert("Transaction date is required.");
        return;
    }

    if (description.length > 500) {
        alert("Description cannot be longer than 500 characters.");
        return;
    }

    if (!categoryId) {
        alert("Category is required.");
        return;
    }

    const transaction = {
        id: index,
        amount: amount,
        transactionDate: transactionDate,
        description: description,
        category: {
            id: categoryId
        }
    }

    console.log("Transaction in update:", transaction);

    fetch(`${transactionUrl}/${index}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    })
        .then(() => {
            getTransactionData();
        })
        .catch(error => console.error('Unable to update item.', error));
}

function _displayTransactions() {
    const tBody = document.getElementById('transactions');
    tBody.innerHTML = ''; // Clear existing rows
    console.log("Transactions in display:", transactions);
    transactions.forEach(transaction => {
        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode1 = document.createTextNode(transaction.amount);
        td1.appendChild(textNode1);

        let td2 = tr.insertCell(1);

        // Convert the ISO date string to a JavaScript Date object
        let date = new Date(transaction.transactionDate);

        // Format the date as "YYYY-MM-DD HH:mm:ss"
        let formattedDate = date.toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false // Use `true` for AM/PM format
        });

        // Create text node with formatted date and append to the cell
        let textNode2 = document.createTextNode(formattedDate);
        td2.appendChild(textNode2);

        let td3 = tr.insertCell(2);
        let description = transaction.description;
        td3.appendChild(description == null || description === "string" ? document.createTextNode("No description provided") : document.createTextNode(description));

        let td4 = tr.insertCell(3);
        let textNode4 = document.createTextNode(transaction.category.categoryName);
        td4.appendChild(textNode4);

        let td5 = tr.insertCell(4);
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayTransactionEditForm(${transaction.id})`);

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteTransaction(${transaction.id})`);

        td5.appendChild(editButton);
        td5.appendChild(deleteButton);
    });
}
function filterTransactions() {
    const searchDescription = document.getElementById('search-description').value.trim().toLowerCase();
    const filterCategory = document.getElementById('filter-category').value;
    const filterDate = document.getElementById('filter-date').value;

    const filteredTransactions = transactions.filter(transaction => {
        const matchesDescription = transaction.description.toLowerCase().includes(searchDescription);
        const matchesCategory = !filterCategory || transaction.category.id == filterCategory;
        const matchesDate = !filterDate || transaction.transactionDate.includes(filterDate);

        return matchesDescription && matchesCategory && matchesDate;
    });

    _displayFilteredTransactions(filteredTransactions);
}

function _displayFilteredTransactions(filteredTransactions) {
    const tBody = document.getElementById('transactions');
    tBody.innerHTML = ''; // Clear existing rows
    console.log("Filtered transactions in display:", filteredTransactions);
    filteredTransactions.forEach(transaction => {
        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode1 = document.createTextNode(transaction.amount);
        td1.appendChild(textNode1);

        let td2 = tr.insertCell(1);

        let date = new Date(transaction.transactionDate);

        let formattedDate = date.toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false // Use `true` for AM/PM format
        });

        // Create text node with formatted date and append to the cell
        let textNode2 = document.createTextNode(formattedDate);
        td2.appendChild(textNode2);

        let td3 = tr.insertCell(2);
        let description = transaction.description;
        td3.appendChild(description == null || description === "string" ? document.createTextNode("No description provided") : document.createTextNode(description));

        let td4 = tr.insertCell(3);
        let textNode4 = document.createTextNode(transaction.category.categoryName);
        td4.appendChild(textNode4);

        let td5 = tr.insertCell(4);
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayTransactionEditForm(${transaction.id})`);

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteTransaction(${transaction.id})`);

        td5.appendChild(editButton);
        td5.appendChild(deleteButton);
    });
}

function populateCategoryFilter() {
    const filterCategorySelect = document.getElementById('filter-category');
    filterCategorySelect.innerHTML = '<option value="">All categories</option>';

    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.categoryName;
        filterCategorySelect.appendChild(option);
    });
}
