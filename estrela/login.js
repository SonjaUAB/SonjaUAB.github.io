/* ******************************************Sónia Violante, nº 1100135********************************************   */

//Função de login*******************************************************************************************************
function login() {
    var username = document.login.username.value;
    var password = document.login.password.value;

    var YourMessageLog = ""; // cria variável para a mensagem de erro, inicializa vazia
    // Validação das regras para o username
    if (!regras_validacao("username", username)) {
        YourMessageLog += "Regras para username: ter no mínimo 4 carateres; começar por uma letra maiúscula; não conter números\n";
    } else
    // Validação das regras para a password
    if (!regras_validacao("password", password)) {
        YourMessageLog += "Regras para password: ter pelo menos um caracter especial; ter um caracter maiusculo; ter 4 numeros; ter 8 ou mais caracteres.\n";
    }

    // Caso exista alguma mensagem de erro, esta é mostrada e o formulário não é inserido
    if (YourMessageLog.length > 0) {
        alert(YourMessageLog);
        return false;
    }

    //Não havendo qualquer mensagem, é realizada uma validação de cookies, sendo verificando
    //se o username corresponde à password
    var user = CookieGet(username);
    if ( user != null ){
        user = JSON.parse(user );
        if ( user.password == password){
            CookieCreate("username", username);
            return true;
        } else {
            alert("Password Invalida");
        }
    }
    return false;
}

//Fim do ficheiro login.js *********************************************************************************************