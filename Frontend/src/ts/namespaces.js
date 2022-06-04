var Elements;
(function (Elements) {
    var InputElements;
    (function (InputElements) {
        InputElements.login = document.getElementById("login");
        InputElements.email = document.getElementById("email");
        InputElements.password = document.getElementById("password");
        InputElements.confirmPassword = document.getElementById("confirmPassword");
    })(InputElements = Elements.InputElements || (Elements.InputElements = {}));
    var buttonElements;
    (function (buttonElements) {
        buttonElements.registerButton = document.getElementById("btn-register");
        buttonElements.loginButton = document.getElementById("btn-login");
    })(buttonElements = Elements.buttonElements || (Elements.buttonElements = {}));
})(Elements || (Elements = {}));
var Functions;
(function (Functions) {
    var DatabaseFunctions;
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
var User = /** @class */ (function () {
    function User(login, email, password, confirmPassword) {
        this.login = login;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    User.prototype.registerUser = function () {
        return {
            login: this.login,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
    };
    User.prototype.user = function () {
        return this.registerUser();
    };
    return User;
}());
Elements.buttonElements.registerButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (Functions.DatabaseFunctions.readDatabase() !== null) {
        var user = new User(Elements.InputElements.login.value, Elements.InputElements.email.value, Elements.InputElements.password.value, Elements.InputElements.confirmPassword.value);
        alert("conta criada com sucesso!");
        Functions.DatabaseFunctions.saveDatabase(user);
    }
});
var Current;
(function (Current) {
    var Main;
    (function (Main) {
        function signUp(login, password) {
            var currentUser = Functions.DatabaseFunctions.readDatabase();
            var loginObj = currentUser.login;
            var passObj = currentUser.password;
            if (login === loginObj && password === passObj) {
                alert("Usuário logado com sucesso!");
            }
            else {
                alert("Senha ou Login inválidos!");
            }
        }
        Main.signUp = signUp;
    })(Main = Current.Main || (Current.Main = {}));
})(Current || (Current = {}));
Elements.buttonElements.loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    Current.Main.signUp(Elements.InputElements.login.value, Elements.InputElements.password.value);
});
