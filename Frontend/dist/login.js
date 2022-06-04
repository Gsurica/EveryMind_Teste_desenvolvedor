"use strict";
var Current;
(function (Current) {
    let Main;
    (function (Main) {
        function signUp(login, password) {
            const currentUser = Functions.DatabaseFunctions.readDatabase();
            const loginObj = currentUser.login;
            const passObj = currentUser.password;
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
Elements.buttonElements.loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    Current.Main.signUp(Elements.InputElements.login.value, Elements.InputElements.password.value);
});
