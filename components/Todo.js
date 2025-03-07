export default class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    this._handleCheckboxEl();
    this._handleDeleteBtn();
  }

  _handleCheckboxEl() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._toggleCompletion();
      this._handleCheck(this._data.completed);
    });
  }

  _handleDeleteBtn() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._remove();
      this._handleDelete(this._data.completed);
    });
  }

  _remove = () => {
    this._todoElement.remove();
  };

  _toggleCompletion() {
    this._data.completed = !this._data.completed;
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _generateDateEl() {
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._date = this._data.date.input;
    this._dueDate = this._data.date;
    if (!isNaN(this._dueDate)) {
      this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}`;
    }
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    this._todoNameEl = this._todoElement.querySelector(".todo__name");

    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    this._todoNameEl.textContent = this._data.name;

    this._generateCheckboxEl();
    this._generateDateEl();
    this._setEventListeners();

    return this._todoElement;
  }
}
