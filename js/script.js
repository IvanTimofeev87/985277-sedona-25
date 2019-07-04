var link = document.querySelector(".search-button");
var popup = document.querySelector(".hotels-search-date-form");
var close = document.querySelector(".modal-close");
var check_in = popup.querySelector(".check-in-date");
var check_out = popup.querySelector(".check-out-date");
var adult = popup.querySelector(".adult-value");
var children = popup.querySelector(".children-value");

var isStorageSupport = true;
var storage1 = "";
var storage2 = "";

try {
    storage1 = localStorage.getItem("adult");
    storage2 = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  check_in.focus();
  if (storage1) {
    adult.value = storage1;
  }
  if (storage2) {
    children.value = storage2;
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function (evt) {
  if (!check_in.value || !check_out.value || !adult.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})
