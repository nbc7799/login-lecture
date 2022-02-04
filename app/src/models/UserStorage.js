"use strict";

class UserStorage {
  //이런 데이터는 컨트롤러가 가지면안됨, 모델로 분리해야함
  static #users = {
    id: ["jun", "jin", "김씨"],
    password: ["1234", "1234", "123456"],
    name: ["jungyu", "나개발", "김씨"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return newUsers;
  }
}

module.exports = UserStorage;
