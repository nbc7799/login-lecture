"use strict";

const id = document.querySelector(".id");
const password = document.querySelector(".password");
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const req = {
    id: id.value,
    password: password.value,
  };

  console.log(req);
});
