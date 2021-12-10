const userArray = [
    'admin',
    'abc123'
]

const start = () => {
    const loguin = document.getElementById('lgnBtn')
    loguin.onclick = lgnEvent
}

const lgnEvent = event => {
    const user =  document.getElementById('username').value
    const password = document.getElementById('password').value
    const result = document.getElementById('result')

    if (user === userArray[0] && password === userArray[1]) {
        result.textContent = "Loguin executado com sucesso!"
        window.location.href = "../pages/secondPage.html"
    } else {
        if (user === '' || password === '') {
            result.textContent = "Um dos campos acima estão vazios. Por favor, preencha-os!"
        } else {
            result.textContent = "Usuário e/ou Senha incorretos!"
        }
    }
}

start()