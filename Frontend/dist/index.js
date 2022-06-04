"use strict";
var Elements;
(function (Elements) {
    let InputElements;
    (function (InputElements) {
        InputElements.login = document.getElementById("login");
        InputElements.email = document.getElementById("email");
        InputElements.password = document.getElementById("password");
        InputElements.confirmPassword = document.getElementById("confirmPassword");
    })(InputElements = Elements.InputElements || (Elements.InputElements = {}));
    let buttonElements;
    (function (buttonElements) {
        buttonElements.registerButton = document.getElementById("btn-register");
        buttonElements.loginButton = document.getElementById("btn-login");
    })(buttonElements = Elements.buttonElements || (Elements.buttonElements = {}));
})(Elements || (Elements = {}));
var Functions;
(function (Functions) {
    let DatabaseFunctions;
    (function (DatabaseFunctions) {
        function saveDatabase(user) {
            localStorage.setItem("users", JSON.stringify(user));
        }
        DatabaseFunctions.saveDatabase = saveDatabase;
        function readDatabase() {
            return JSON.parse(localStorage.getItem("users") || "users");
        }
        DatabaseFunctions.readDatabase = readDatabase;
    })(DatabaseFunctions = Functions.DatabaseFunctions || (Functions.DatabaseFunctions = {}));
})(Functions || (Functions = {}));
class User {
    constructor(login, email, password, confirmPassword) {
        this.login = login;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    registerUser() {
        return {
            login: this.login,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
    }
    user() {
        return this.registerUser();
    }
}
Elements.buttonElements.registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (Functions.DatabaseFunctions.readDatabase() !== null) {
        const user = new User(Elements.InputElements.login.value, Elements.InputElements.email.value, Elements.InputElements.password.value, Elements.InputElements.confirmPassword.value);
        alert("conta criada com sucesso!");
        Functions.DatabaseFunctions.saveDatabase(user);
    }
});
