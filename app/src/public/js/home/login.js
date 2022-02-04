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

  fetch("/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  console.log(req);
});
