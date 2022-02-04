"use strict";

//프런트 js파일
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
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.log(new Error("로그인 중 에러 발생"));
      // console.log("로그인 중 에러 발생"); 이렇게도가능
    });
});
