/* ******************************************Sónia Violante, nº 1100135********************************************   */

//PEQUENAS FUNÇÕES DE APOIO À VALIDAÇÃO DAS REGRAS

//Função de procura de valores compreendidos entre x e y ('x' e 'y' podem ser letras ou números)************************
function between(valor, x, y) {

    for (let index = 0; index < valor.length; index++) {
        const bet = valor[index];
        if (bet < x || bet > y) {
            return false;
        }
    }
    return true;
}

//função com o objetivo de contar a quantidade de números dentro de um string introduzidos em determinado campo*********
function NumbersCount(valor) {

    var num = 0;
    for (let index = 0; index < valor.length; index++) {
        const n_c = valor[index];
        if (n_c >= '0' && n_c <= '9') {
            num++;
        }
    }
    return num;
}

//Função que procura Caracteres especiais do conjunto*******************************************************************
function SpecialChar(valor, conjunto) {

    for (let s_ch = 0; s_ch < conjunto.length; s_ch++) {
        if (valor.indexOf(conjunto[s_ch]) > -1)
            return true;
    }
    return false;
}

//Função que procura caracteres normais dentro de um conjunto **********************************************************
function NormalChars(valor, x, y) {

    for (let index = 0; index < valor.length; index++) {
        const n_c = valor[index];
        if (n_c >= x && n_c <= y) {
            return true;
        }
    }
    return false;
}

//Função de verificação de composição pode letras e números*************************************************************
function Leters_Numbers(valor) {

    for (let index = 0; index < valor.length; index++) {
        const l_n = valor[index];
        if (l_n < '0' || l_n > '9') { // se encontrar números numeros
            if (l_n < 'a' || l_n > 'z') { // se encontrar letras minusculas
                return false;                      //retorna falso
            }
        }
    }
    return true;        //estando tudo OK, retorna verdadeiro
}


//Função de verificação de minúsculas***********************************************************************************
function LowerLeters(valor) {
    return between(valor, 'a', 'z');

}
//Função de verificação de maiúsculas***********************************************************************************
function UpperLeters(valor) {
    return between(valor, 'A', 'Z');
}

//FUNÇÕES: REGRAS DE VALIDAÇÃO E MENSAGENS DE ERRO POR FALHA DAS REGRAS

//Função de validação das condições dos vários campos preenchidos pelo utilizador***************************************
function regras_validacao(tipo, valor) {
    switch (tipo) {

        case "username":
            //retorna falso se: menos de 4 caracteres || não inicia por Maiuscula || contém números
            if ((valor.length < 4) || (!UpperLeters(valor[0])) || NormalChars(valor, '0', '9')
            ) {
                return false;
            }
            break;

        case "email":
            //Retorna falso se: ao "partir" o e-mail de acordo com a existência de @, existirem menos ou mais que 2 partes;
            //Retorna falso se: a parte antes do @ tiver mais que 30 caracteres;
            //Retorna falso se: a parte antes do @ NÃO for composto por apenas letras e números.
            var break_arr = valor.split('@');
            if (break_arr.length != 2)
                return false;
            if (break_arr[0].length > 30)
                return false;
            if (!Leters_Numbers(break_arr[0]))
                return false;
            //Após o @:
            //Retorna falso se: ao partir pelo ponto, existirem menos ou mais que 2 partes;
            //Retorna falso se: a primeira parte (correspondente ao domínio) tiver mais que 20 caracteres; a segunda parte (país) tiver mais ou menos que 2 caracteres;
            //Retorna falso se: tanto o domínio e o código do país não forem compostos apenas por minúsculas
            var break_ponto = break_arr[1].split('.');
            if (break_ponto.length != 2)
                return false;
            if (break_ponto[0].length > 20 || break_ponto[1].length != 2)
                return false;
            if (!LowerLeters(break_ponto[0]))
                return false;
            if (!LowerLeters(break_ponto[1]))
                return false;
            break;
        case "morada":
            //Retorna falso se: Morada tiver menos que 10 caracteres.
            if (valor.length < 10)
                return false;
            break;

        case "telefone":
            //Retorna falso se numero de telefone não for composto apenas por números
            //Retorna falso se: tiver menos ou mais que 9 algarismos
            if (isNaN(valor))
                return false;
            if ((valor.length < 9) ||(valor.length >9) )
                return false;
            break;

        case "password":
            //Retorna falso se: password tiver menos que 8 caracteres;
            //Retorna falso se: não tiver pelos menos uma maiúscula;
            //Retorna falso se: não tiver pelo menos um caracter especiaso do conjunto "_-#!+";
            if (valor.length < 8)
                return false;
            if (!NormalChars(valor, 'A', 'Z'))
                return false;
            if (!SpecialChar(valor, "_-#!+=@"))
                return false;
            if (NumbersCount(valor) < 4) // 4 numeros
                return false;

            break;

        default:
            break;
    }
    return true;

}

//Função de mensagens ao utilizador quando este não cumpre os parâmetros de registo de novo cliente criando cookie referente aos dados introduzidos
// É igualmente uma função relativa às regras de validação**************************************************************
function YouGotMessage() {

    var YourMessage = ""; // cria variável para a mensagem de erro, inicializa vazia

    var username = document.registo.username.value;
    var email = document.registo.email.value;
    var morada = document.registo.morada.value;
    var telefone = document.registo.telefone.value;
    var password =document.registo.password.value

    // Validação das regras para o username
    if (!regras_validacao("username", username)) {
        YourMessage += "Regras para username: ter no mínimo 4 carateres; começar por uma letra maiúscula; não conter números\n";
    } else
    // Validação das regras para o email
    if (!regras_validacao("email", email)) {
        YourMessage += "Email inválido, deve ser da forma: email@mail.pt\n";
    } else
    // Validação das regras para a morada
    if (!regras_validacao("morada", morada)) {
        YourMessage += "Morada pequena: A morada deve ter no mínimo 10 carateres\n";
    } else
    // Validação das regras para a password
    if (!regras_validacao("password", password)) {
        YourMessage += "Regras para password: ter pelo menos um caracter especial; ter um caracter maiusculo; ter 4 numeros; ter 8 ou mais caracteres.\n";
    } else
    // Validação das regras para o telefone
    if (!regras_validacao("telefone", telefone)) {
        YourMessage += "Número de telefone inválida: deve conter apenas números e 9 números";
    }

    //Caso se verifique a existência de mensagems, esta é mostrada ao utilizador e o formulário não é inserido
    // Valida FORMULARIO
    if (YourMessage.length > 0) {
        alert(YourMessage);
        return false;
    }

    //Estando tudo OK com as regras de validação, todos os valores em JavaScript são convertidos para um string JSON
    var user = JSON.stringify(
        {
            "username" : username ,
            "email" : email ,
            "morada": morada,
            "telefone": telefone,
            "password": password
        }
    );
    //e é criado um Cookie com a string JSON
    CookieCreate( username, user);
    return true;      // sem erros, insere formulário
}

//Fim de ficheiro registo.js *******************************************************************************************