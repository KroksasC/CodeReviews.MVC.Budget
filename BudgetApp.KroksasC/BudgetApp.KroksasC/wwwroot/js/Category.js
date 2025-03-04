const categoriesUrl = 'api/category';

let categories = []; // Global variable to store categories

document.addEventListener('DOMContentLoaded', () => {
    getCategoriesData();
});

function openCategoryInput() {
    document.getElementById("add-category-form").style.display = "block";
}

function closeCategoryInput() {
    document.getElementById("add-category-form").style.display = "none";
}

function openCategories() {
    document.getElementById("show-categories-form").style.display = "block";
    _displayCategories();
}

function closeCategories() {
    document.getElementById("show-categories-form").style.display = "none";
}

function closeCategoriesEditForm() {
    document.getElementById("edit-category-form").style.display = "none";
}

function openCategoriesEditForm() {
    document.getElementById("edit-category-form").style.display = "block";
}

function getCategoriesData() {
    fetch(categoriesUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('API Data c:', data);
            categories = data; // Store fetched categories globally
            _displayCategoriesInAddTransactionsFrom(); // No parameter needed // Use global categories
            _displayCategories();
            populateCategoryFilter();
        })
        .catch(error => console.error('Error:', error));
}

function addCategory() {
    const categoryNameTextbox = document.getElementById('add-category');
    const categoryName = categoryNameTextbox.value.trim();

    if (!categoryName) {
        alert("Category name is required.");
        return;
    }

    if (categoryName.length > 100) {
        alert("Category name cannot be longer than 100 characters.");
        return;
    }

    const category = {
        CategoryName: categoryName
    };

    if (categories.find(c => c.categoryName === categoryName)) {
        alert("Category already exists.");
        return;
    }

    fetch(categoriesUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    })
        .then(response => response.json())
        .then(() => {
            console.log("Category added:", category);
            getCategoriesData();
        })
        .catch(error => console.error('Unable to add item.', error));
}

function _displayCategoriesInAddTransactionsFrom() {
    const categoryOptionsDiv = document.getElementById("category-options");
    if (!categoryOptionsDiv) {
        console.error("category-options div not found!");
        return;
    }

    categoryOptionsDiv.innerHTML = ""; // Clear previous categories

    categories.forEach(category => {
        let label = document.createElement("label");
        let radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = "category";
        radioButton.value = category.id;

        label.appendChild(radioButton);
        label.appendChild(document.createTextNode(category.categoryName));
        categoryOptionsDiv.appendChild(label);
        categoryOptionsDiv.appendChild(document.createElement("br"));
    });

    console.log("Categories displayed in transactions.");
}

function _displayCategoriesInTransactionsEditForm(transaction) {
    const categoryOptionsDiv = document.getElementById("category-edit-transactions");
    if (!categoryOptionsDiv) {
        console.error("category-edit-transactions div not found!");
        return;
    }

    categoryOptionsDiv.innerHTML = ""; // Clear previous categories

    categories.forEach(category => {
        let label = document.createElement("label");
        let radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = "category1";
        radioButton.value = category.id;

        if (category.id === transaction.category.id) {
            radioButton.checked = true;
        }

        label.appendChild(radioButton);
        label.appendChild(document.createTextNode(category.categoryName));
        categoryOptionsDiv.appendChild(label);
        categoryOptionsDiv.appendChild(document.createElement("br"));
    });

    console.log("Categories displayed in transaction edit form.");
}

function displayCategoriesEditForm(id) {
    const category = categories.find(category => category.id == id);
    openCategoriesEditForm();
    document.getElementById('edit-categoryName').value = category.categoryName;

    const saveButton = document.getElementById('save-category-btn');
    saveButton.onclick = function () {
        updateCategory(id)
    };
}

function updateCategory(index) {
    const newCategoryNameTextBox = document.getElementById("edit-categoryName");
    const newCategoryName = newCategoryNameTextBox.value.trim();

    if (!newCategoryName) {
        alert("Category name is required.");
        return;
    }

    if (newCategoryName.length > 100) {
        alert("Category name cannot be longer than 100 characters.");
        return;
    }

    const category = {
        id: index,
        categoryName: newCategoryName
    }

    console.log('category in update:', category);

    fetch(`${categoriesUrl}/${index}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    })
        .then(() => {
            getCategoriesData();
        })
        .catch(error => console.error('Unable to update item.', error));
}

function deleteCategory(id) {
    fetch(`${categoriesUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        // Remove the deleted category from the categories array
        categories = categories.filter(category => category.id !== id);
        transactions = transactions.filter(transaction => transaction.category.id !== id);
        // Update the displayed categories
        _displayCategories();
        _displayTransactions();
        getCategoriesData();
        _displayCategoriesInAddTransactionsFrom();
        _displayCategoriesInTransactionsEditForm();
    })
    .catch(error => console.error('Unable to delete item.', error));
}

function _displayCategories() {
    const tBody = document.getElementById('categories');
    tBody.innerHTML = '';

    categories.forEach(category => {
        let tr = tBody.insertRow();
        let td1 = tr.insertCell(0);
        let textNode = document.createTextNode(category.categoryName);
        td1.appendChild(textNode);

        let td2 = tr.insertCell(1)
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayCategoriesEditForm(${category.id})`);
        editButton.type = 'button';
        let deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteCategory(${category.id})`);

        td2.appendChild(editButton);
        td2.appendChild(deleteButton);
    })
}

