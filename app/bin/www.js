"use strict";

const app = require("../app");
//포트열어줌
const PORT = 7000;

app.listen(PORT, () => {
  console.log("서버가동");
});
