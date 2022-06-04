namespace Current {
    export namespace Main {
        export function signUp(login: string, password: string) {
            const currentUser = Functions.DatabaseFunctions.readDatabase()

            const loginObj: string = currentUser.login
            const passObj: string = currentUser.password

            if(login === loginObj && password === passObj) {
                alert("Usuário logado com sucesso!")
            } else {
                alert("Senha ou Login inválidos!")
            }
        }
    }
}

Elements.buttonElements.loginButton.addEventListener("click", (e) => {
    e.preventDefault()
    Current.Main.signUp(
        Elements.InputElements.login.value,
        Elements.InputElements.password.value
    )
})