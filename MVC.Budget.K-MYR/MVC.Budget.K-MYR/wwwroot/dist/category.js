"use strict";
(self["webpackChunkthebudgeteer"] = self["webpackChunkthebudgeteer"] || []).push([["category"],{

/***/ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category-entry.js":
/*!************************************************************************************************************************************!*\
  !*** ../../../../../C # Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category-entry.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-validation */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation-unobtrusive */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery-validation-unobtrusive/dist/jquery.validate.unobtrusive.js");
/* harmony import */ var jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation_unobtrusive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_bootstrap_imports_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/bootstrap-imports.scss */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/bootstrap-imports.scss");
/* harmony import */ var datatables_net_bs5_css_dataTables_bootstrap5_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net-bs5/css/dataTables.bootstrap5.min.css */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css");
/* harmony import */ var country_select_js_build_css_countrySelect_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! country-select-js/build/css/countrySelect.min.css */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/country-select-js/build/css/countrySelect.min.css");
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-icons/font/bootstrap-icons.css");
/* harmony import */ var bootstrap_datepicker_dist_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css");
/* harmony import */ var _scss_site_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/site.scss */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/scss/site.scss");
/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./site.js */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/site.js");
/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category.js */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category.js");
﻿













/***/ }),

/***/ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category.js":
/*!******************************************************************************************************************************!*\
  !*** ../../../../../C # Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asyncComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asyncComponents */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/asyncComponents.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/chart.js/dist/chart.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/api.js");
/* harmony import */ var _messageBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messageBox */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/messageBox.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/node_modules/jquery/dist/jquery.js");
﻿



chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.DoughnutController, chart_js__WEBPACK_IMPORTED_MODULE_3__.ArcElement);

const messageBox = new _messageBox__WEBPACK_IMPORTED_MODULE_2__["default"]();
const chartDefaultsTask = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_0__.importChartDefaults)();

const currentDate = new Date();
const categoryId = document.getElementById('category_Id');

const categoryDashboardPromise = getCategoryDashboard(currentDate, JSON.parse(categoryId.dataset.object));
const modalsPromise = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_0__.importBootstrapModals)()
    .catch(() => {
    messageBox.addMessage({
        text: 'An Critical Error Occured. Please reload the page!',
        iconId: '#cross-icon'
    });
    messageBox.show(false);
    });
const collapsesPromise = (0,_asyncComponents__WEBPACK_IMPORTED_MODULE_0__.importBootstrapCollapses)()
    .then(() => {
        $('.accordion-head').on('click', function (event) {
            if (event.target.id !== 'addTransaction-button') {
                let collapse = $(this).next();
                if (!collapse[0].classList.contains('collapsing')) {
                    collapse.collapse('toggle');
                    let caret = $('.accordion-caret', this)[0];
                    caret.classList.toggle('rotate');
                }               
            }
        });
    })
    .catch((error) => {
        messageBox.addMessage({
            text: 'An Critical Error Occured. Please reload the page!',
            iconId: '#cross-icon'
        });
        messageBox.show(false);
    });

setupDataTableHandlers(categoryDashboardPromise, modalsPromise)
initAddTransactionModal(categoryDashboardPromise, modalsPromise)
setupRerenderHandlers(categoryDashboardPromise);

async function getCategoryDashboard(id, date, data) {
    try {
        const { default: CategoryDashboard } = await __webpack_require__.e(/*! import() | categoryDashboard */ "async-categoryDashboard").then(__webpack_require__.bind(__webpack_require__, /*! ./categoryDashboard */ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/categoryDashboard.js"));
        await chartDefaultsTask;

        return new CategoryDashboard(id, date, data);

    } catch (error) {
        messageBox.addMessage({
            text: 'Dashboard Couldn\'t Be Loaded. Please reload the page! ',
            iconId: '#cross-icon'
        });
        messageBox.show(false);
        console.error(error);
    }
} 

async function setupRerenderHandlers(dashboardPromise) {
    var dashBoard = await dashboardPromise;   
    await dashBoard.initPromise;
    window.addEventListener('countryChanged', () => {
        setTimeout(() => dashBoard.formatDashboard(), 0);
    })
}

async function setupDataTableHandlers(dashboardPromise, modalsPromise) {
    var dashBoard = await dashboardPromise;   
    await dashBoard.initPromise;
    var table = dashBoard.table;
    var modals = await modalsPromise;

    var updateTransactionModal = modals.find(m => m._element.id == 'updateTransaction-modal');
    var deleteTransactionModal = modals.find(m => m._element.id == 'deleteTransaction-modal');

    initUpdateTransactionModal(dashBoard, updateTransactionModal, table);
    initDeleteTransactionModal(dashBoard, deleteTransactionModal, table);

    var idUpdate = document.getElementById('updateTransaction_id');
    var labelUpdate = document.getElementById('updateTransaction-label');
    var title = document.getElementById('updateTransaction_title');
    var dateTime = document.getElementById('updateTransaction_datetime');
    var amount = document.getElementById('updateTransaction_amount');
    var isHappy = document.getElementById('updateTransaction_isHappyTrue');
    var isUnhappy = document.getElementById('updateTransaction_isHappyFalse');
    var isNecessary = document.getElementById('updateTransaction_isNecessaryTrue');
    var isUnnecessary = document.getElementById('updateTransaction_isNecessaryFalse');

    var labelDelete = document.getElementById('deleteTransaction-label');
    var idDelete = document.getElementById('deleteTransaction_id');
    table.on('click', 'svg', function (event) {
        var row = table.row(event.target.closest('tr'));
        var data = row.data();
        switch (this.dataset.icon) {
            case 'edit':
                idUpdate.value = data.id;
                labelUpdate.textContent = `Edit '${data.title}'`;
                title.value = data.title;
                dateTime.value = data.dateTime.slice(0, 19);
                amount.value = data.amount;
                let element = data.isHappy ? isHappy : isUnhappy;
                element.checked = true;
                element = data.isNecessary ? isNecessary : isUnnecessary;
                element.checked = true;
                updateTransactionModal.show();
                break;
            case 'delete':
                idDelete.value = data.id;
                labelDelete.textContent = `Delete '${data.title}'`;
                deleteTransactionModal.show();
        }
    });

    var tableContainer = document.getElementById('table-container');
    tableContainer.style = '';
    table.columns.adjust();
}

async function initAddTransactionModal(dashboardPromise, modalsPromise) {
    var modals = await modalsPromise;
    var dB = await dashboardPromise;
    var modal = modals.find(m => m._element.id == 'addTransaction-modal');
    var addTransactionModalCategoryId = document.getElementById('addTransaction_categoryId');
    var form = document.getElementById('addTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let transaction = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.postTransaction)(new FormData(this));
            if (transaction) {
                dB.addTransaction(transaction);
                messageBox.addMessage({
                    text: 'Transaction added successfully.',
                    iconId: '#check-icon'
                });
                messageBox.show();
            }
        }
    });

    var addIcon = document.getElementById('addTransaction-button');
    addIcon.addEventListener('click', function () {
        addTransactionModalCategoryId.value = categoryId.value;
        modal.show();
    });
}

function initUpdateTransactionModal(dashboard, modal, table) {
    var form = document.getElementById('updateTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown && $(this).valid()) {
            modal.hide();
            let formData = new FormData(this);
            let isUpdated = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.putTransaction)(formData);
            if (isUpdated) {
                messageBox.addMessage({
                    text: 'Transaction edited successfully.',
                    iconId: '#check-icon'
                });
                messageBox.show();
                let row = table.row((_, data) => data.id === parseInt(formData.get('Id')));
                if (row) {
                    let data = row.data();
                    let newAmount = parseFloat(formData.get('Amount'));
                    let newIsHappy = formData.get('IsHappy') === 'true';
                    let newIsNecessary = formData.get('IsNecessary') === 'true'; 
                    dashboard.editTransaction(data, newAmount, newIsHappy, newIsNecessary);
                    data.amount = newAmount;
                    data.title = formData.get('Title');
                    data.dateTime = formData.get('DateTime');
                    data.isHappy = newIsHappy;
                    data.isNecessary = newIsNecessary;
                    data.isEvaluated = formData.get('IsEvaluated') === 'true';
                    data.previousIsHappy = formData.get('PreviousIsHappy') === 'true';
                    data.PreviousIsNecessary = formData.get('PreviousIsNecessary') === 'true';
                    row.invalidate();
                }
            }
        }
    });
}

function initDeleteTransactionModal(dashboard, modal, table) {
    var form = document.getElementById('deleteTransaction-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        if (modal._isShown) {
            modal.hide();
            var formData = new FormData(this);
            var id = parseInt(formData.get('Id'));
            var token = formData.get('__RequestVerificationToken');
            var isDeleted = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteTransaction)(id, token);
            if (isDeleted) {
                messageBox.addMessage({
                    text: 'Transaction deleted successfully.',
                    iconId: '#check-icon'
                });
                messageBox.show();
                let row = table.row((_, data) => data.id === parseInt(formData.get('Id')));
                if (row) {
                    dashboard.removeTransaction(row.data());
                    row.remove().draw();
                }
            }
        }
    });
}


/***/ }),

/***/ "../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/messageBox.js":
/*!********************************************************************************************************************************!*\
  !*** ../../../../../C # Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/messageBox.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MessageBox)
/* harmony export */ });
﻿class MessageBox {
    #messageBox;
    #messages;
    #index;
    #messagesContainer;
    #icon;
    #isClosing;
    #newMessagesQueue;
    #upButton;
    #downButton;
    #removeInterval;

    constructor() {
        this.#messageBox = document.getElementById('messageBox');
        this.#messagesContainer = document.getElementById('messageBox-scrollcontainer');
        this.#icon = document.getElementById('messageBoxIcon');
        this.#upButton = document.getElementById('messageBoxUp-button');
        this.#downButton = document.getElementById('messageBoxDown-button');
        this.#index = 0;
        this.#isClosing = false;
        this.#messages = [];
        this.#newMessagesQueue = [];

        this.#setupEventHandler();
    }

    #setupEventHandler() {
        var closeButton = document.getElementById('messageBoxClose-button');

        closeButton.addEventListener('dblclick', () => {
            this.hide();
        });

        closeButton.addEventListener('click', () => {
            if (this.#index === 0 && this.#messagesContainer.childElementCount === 1) {
                this.hide();
            } else {
                this.#removeMessage(this.#index);
            }
        });

        this.#messageBox.addEventListener('transitionend', () => {
            if (this.#isClosing) {
                this.#clearMessages();
                this.#isClosing = false;

                if (this.#newMessagesQueue.length > 0) {
                    this.#newMessagesQueue.forEach(message => this.addMessage(message));
                    this.#newMessagesQueue = [];
                }
            }
        });


        this.#upButton.addEventListener('click', () => {
            clearInterval(this.#removeInterval);
            this.#move(-1);
        });

        this.#downButton.addEventListener('click', () => {
            clearInterval(this.#removeInterval);
            this.#move(1);
        });
    }

    #move(step) {
        var newIndex = this.#index + step;
        if (newIndex < this.#messagesContainer.childElementCount && newIndex >= 0) {
            this.#index = newIndex;
            this.#scrollTo(this.#index);
            this.#setIcon();
            this.#setButtons();
        }
    }

    #scrollTo(index, behavior = 'smooth') {
        var messageHeight = 48;
        if (index < this.#messagesContainer.childElementCount && index >= 0) {        
            this.#messagesContainer.scrollTo({
                top: index * messageHeight,
                behavior: behavior
            });
        }
    }

    addMessage(messageObject) {
        if (this.#isClosing) {
            this.#newMessagesQueue.push(messageObject);
        } else {
            var messageContainer = document.createElement('div');
            messageContainer.className = 'messageBoxMessage';
            var text = document.createElement('span');
            text.className = 'messageBox-text';
            text.textContent = messageObject.text;
            messageContainer.appendChild(text);
            this.#messagesContainer.appendChild(messageContainer);
            this.#messages.push(messageObject);
            this.#setButtons();
        }
    }

    #removeMessage(index = 0) { 
        var childToRemove = this.#messagesContainer.children[index];
        if (childToRemove) {
            if (index < this.#index) {
                this.#index -= 1;
                this.#scrollTo(this.#index, 'instant');
            }
            this.#messagesContainer.removeChild(childToRemove);            
        }
        this.#messages.splice(index, 1);
        this.#index = Math.min(this.#index, this.#messagesContainer.childElementCount);
        this.#setIcon();
        this.#setButtons();
        
    }

    show(fade = true) {
        if (!this.#messageBox.classList.contains('show')) {
            if (fade && !this.#removeInterval) {
                this.#removeInterval = setInterval(() => {
                    if (this.#messagesContainer.childElementCount > 1) {
                        this.#removeMessage()
                    } else {
                        this.hide();
                    }
                }, 3000);
            }
            this.#setIcon(this.#index);
            this.#setButtons();
            this.#messageBox.classList.add('show');
        }        
    }

    hide() {
        if (this.#messageBox.classList.contains('show')) {            
            this.#isClosing = true; 
            this.#messageBox.classList.remove('show');
            if (this.#removeInterval) {
                clearInterval(this.#removeInterval);
                this.#removeInterval = null;
            }
        }
    }

    #clearMessages() {
        this.#messagesContainer.replaceChildren(); 
        this.#messages = [];            
    }

    #setIcon() {
        var messageObject = this.#messages[this.#index];
        if (messageObject) {
            this.#icon.setAttribute('href', messageObject.iconId);
        }
    }

    #setButtons() {
        this.#index > 0 ? this.#upButton.disabled = false : this.#upButton.disabled = true;            
        this.#index < this.#messages.length - 1 ? this.#downButton.disabled = false : this.#downButton.disabled = true;
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["styles-index~fiscalPlan~category","styles-fiscalPlan~category","vendors-index~fiscalPlan~category","vendors-category"], () => (__webpack_exec__("../../../../../C\u0000# Academy Repos/CodeReviews.MVC.Budget/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/src/js/category-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=category.js.map