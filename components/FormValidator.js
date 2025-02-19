class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formElement = formElement;
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(
        this._formElement,
        this._inputElement,
        inputElement.validationMessage
      );
    } else {
      hideInputError(formElement, inputElement, settings);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );

    this._buttonElement = this._submitButtonSelector;

    this._toggleButtonState(this._inputList, this._buttonElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
