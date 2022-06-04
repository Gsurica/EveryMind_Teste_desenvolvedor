namespace Elements {
    export namespace InputElements {
        export const login = document.getElementById("login") as HTMLInputElement;
        export const email = document.getElementById("email") as HTMLInputElement
        export const password = document.getElementById("password") as HTMLInputElement
        export const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement
    }
    export namespace buttonElements {
        export const registerButton = document.getElementById("btn-register") as HTMLElement
        export const loginButton = document.getElementById("btn-login") as HTMLElement
    }
}

namespace Functions {
    export namespace DatabaseFunctions {
        export function saveDatabase(user: object) {
            localStorage.setItem("users", JSON.stringify(user))
        }
        export function readDatabase() {
            return JSON.parse(localStorage.getItem("users") || "users")
        }
    }
}

class User {

    private login: string 
    private email: string 
    private password: string 
    private confirmPassword: string 

    constructor(login: string, email: string, password: string, confirmPassword: string) {
        this.login = login 
        this.email = email 
        this.password = password 
        this.confirmPassword = confirmPassword
    }

    private registerUser(): object {
        return {
            login: this.login,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        }
    }

    public user(): object {
        return this.registerUser()
    }

}

Elements.buttonElements.registerButton.addEventListener("click", (e) => {
    e.preventDefault()

    if(Functions.DatabaseFunctions.readDatabase() !== null){
        const user = new User(
            Elements.InputElements.login.value, 
            Elements.InputElements.email.value,
            Elements.InputElements.password.value,
            Elements.InputElements.confirmPassword.value 
        )
        alert("conta criada com sucesso!")
        Functions.DatabaseFunctions.saveDatabase(user)
    }

})





