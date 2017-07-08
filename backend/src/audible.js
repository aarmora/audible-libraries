import audible, { ENV, VERSION } from "audible-api";
let config = require('../config');

let api = new audible();
let api_register = new audible(config.userToken, config.appClientId);

console.log("hey mang", config.userToken);

export function getLibraryBooks() {
    api_register.getLibraryBooks('06/18/2014')
        .then(function (results, status) {
            console.log(results.data.books.book);
        })
        .catch(function (error) {
            console.log(error);
        });
}
