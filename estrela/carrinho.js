/* ******************************************Sónia Violante, nº 1100135********************************************   */

//Função criada para calcular os valores do carrinho********************************************************************
function CalcCar(){
//1º Passo: ir "buscar" as quantidades introduzidas nos artigos e cada variável receve o seu valor
    var a1 = document.carrinho.malafrida.value;
    var a2 = document.carrinho.cartazul.value;
    var a3 = document.carrinho.pchaves.value;
    var a4 = document.carrinho.conjrapaz.value;
    var a5 = document.carrinho.conjrapariga.value;
    var a6 = document.carrinho.conjneutro.value;
    var a7 = document.carrinho.almred.value;
    var a8 = document.carrinho.almleaf.value;
    var a9 = document.carrinho.almafro.value;
//2º Passo: Multiplicar quantidades dos artigos pelo valor unitário
    var m1 = a1 * 30;
    var m2 = a2 * 15;
    var m3 = a3 * 8;
    var m4 = a4 * 30;
    var m5 = a5 * 30;
    var m6 = a6 * 30;
    var m7 = a7 * 27;
    var m8 = a8 * 35;
    var m9 = a9 * 28;
//3º Passo: Calcular o total a pagar pelo conteúdo do carrinho, convertendo todos os valores para inteiros
    var total = parseInt(m1) + parseInt(m2) + parseInt(m3) + parseInt(m4) + parseInt(m5) + parseInt(m6) + parseInt(m7)
        + parseInt(m8) + parseInt(m9);
//4º Passo: Apresentar ao cliente os valores a pagar pelos artigos individualmente e o total do carrinho
    document.carrinho.t1.value = m1;
    document.carrinho.t2.value = m2;
    document.carrinho.t3.value = m3;
    document.carrinho.t4.value = m4;
    document.carrinho.t5.value = m5;
    document.carrinho.t6.value = m6;
    document.carrinho.t7.value = m7;
    document.carrinho.t8.value = m8;
    document.carrinho.t9.value = m9;
    document.carrinho.T.value = total;
}



//Carrega na página carrinho.html no carrinho os artigos seleccionados na página produtos.html**************************
function CarIn(){
    var carrinho = CookieGet("carrinho");
    if (carrinho != null){
        //Recebe a strin JSON do cookie
        carrinho = JSON.parse(carrinho );
        document.carrinho.malafrida.value = carrinho.malafrida;
        document.carrinho.cartazul.value = carrinho.cartazul;
        document.carrinho.pchaves.value = carrinho.pchaves;
        document.carrinho.conjrapaz.value = carrinho.conjrapaz;
        document.carrinho.conjrapariga.value = carrinho.conjrapariga;
        document.carrinho.conjneutro.value = carrinho.conjneutro;
        document.carrinho.almred.value = carrinho.almred;
        document.carrinho.almleaf.value = carrinho.almleaf;
        document.carrinho.almafro.value = carrinho.almafro;
        //Chama a função CalCar() para realizar automaticamente o valor dos artigos esolhidos em produtos.html
        CalcCar();
    }
}

//Carrinho mantém os cookies ao sair da página carrinho.html************************************************************
function CarOut() {
    CookieSave();
}

//Função que adiciona artigos ao carrinho ao clique do ícone carrinho na página produtos.html***************************
function CarAdd(nome){
    var carrinho = CookieGet("carrinho");

    if (carrinho != null) {
        carrinho = JSON.parse(carrinho);
    } else {
        carrinho = {
            "malafrida" : 0,
            "cartazul" : 0,
            "pchaves" : 0,
            "conjrapaz" : 0,
            "conjrapariga" : 0,
            "conjneutro" : 0,
            "almred" : 0,
            "almleaf" : 0,
            "almafro" : 0
        }
    }
    if (carrinho[nome]=="") {
        carrinho[nome] = 0;
    }

    //cria um cookie com os artigos escolhidos em produtos.html
    carrinho[nome] = parseInt(carrinho[nome]) + 1;
    carrinho = JSON.stringify(carrinho);
    CookieCreate( "carrinho", carrinho);
    alert("Caro Cliente, artigo foi adicionado ao seu carrinho, obrigado!");
}

//Fim do ficheiro carrinho.js ******************************************************************************************