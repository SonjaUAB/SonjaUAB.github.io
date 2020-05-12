/* ******************************************Sónia Violante, nº 1100135********************************************   */


//'Today' recebe o dia em que nos encontramos***************************************************************************
var Today  = (new Date()).getTime();
// Cookie expira dentro de um mês (data de hoje + 30 dias x 24 horas x 60 minutos x 60 segundos x 1000 ms
var expira_daqui_a   = new Date( Today + 30 * 24 * 60 * 60 * 1000 ) ;


//Cria um cookie com nome e codifica o seu valor com recurso ao encodeURIComponent atribuindo-lhe a validade de um mês**
function CookieCreate( nome, valor )
{
    document.cookie = nome + "=" + encodeURIComponent(valor)  + "; path=/; expires=" + expira_daqui_a.toGMTString();
}

//Função para obter cookie criado com a função CookieCreate()***********************************************************
function CookieGet(nome)
{
    var cookie = document.cookie; //recebe o cookie
    var index = cookie.toUpperCase().indexOf(nome.toUpperCase() + '=' );
    if (index > -1) {
        index = index + nome.length + 1 ;
        var pos = cookie.indexOf( ';', index);
        var size = ((pos > -1 )? pos : cookie.length ) - index ;
        var valor = cookie.substr(index, size);
        return (valor != null) ? decodeURIComponent(valor) : null;
        //devolve o valor descodificado do nome que entra com parametro da função
    }
    return null;
}

//Função que guarda nos cookies os artigos escolhidos na página produtos.html*******************************************
function CookieSave() {

    //Inicializa cada variável com o valor de artigo correspondente escolhido
    var a1 = document.carrinho.malafrida.value;
    var a2 = document.carrinho.cartazul.value;
    var a3 = document.carrinho.pchaves.value;
    var a4 = document.carrinho.conjrapaz.value;
    var a5 = document.carrinho.conjrapariga.value;
    var a6 = document.carrinho.conjneutro.value;
    var a7 = document.carrinho.almred.value;
    var a8 = document.carrinho.almleaf.value;
    var a9 = document.carrinho.almafro.value;

    //Todos os valores em JavaScript são convertidos para um string JSON
    var carrinho = JSON.stringify(
        {
            "malafrida" : a1,
            "cartazul" : a2,
            "pchaves" : a3,
            "conjrapaz" : a4,
            "conjrapariga" : a5,
            "conjneutro" : a6,
            "almred" : a7,
            "almleaf" : a8,
            "almafro" : a9
        }
    );
    //e é criado um cookie para a strin JSON
    CookieCreate( "carrinho", carrinho);
}

//Fim do ficheiro cookies.js *******************************************************************************************
