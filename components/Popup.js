export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("popup_visible");
  }

  close() {
    this._popupSelector.classList.remove("popup_visible");
  }

  _handleEscapeClose(evt) {
    if (
      this._popupSelector.classList.contains("popup_visible") &&
      evt.key === "Escape"
    ) {
      close();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener("click", function (evt) {
      if (
        this._popupSelector.classList.contains("popup_visible") &&
        evt.target.classList.contains(this._popupSelector)
      ) {
        close();
      }
    });
  }
}
