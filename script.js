// Declarando variaveis
var data, hora, minuto, segundo, dia, mes, ano, nome, animar;


// Função de inicialização para atribuir valores inicais as variaveis
function init()
{

    data = new Date();
    dia = data.getDate();
    mes = data.getMonth();
    ano = data.getFullYear();
    hora = data.getHours();
    minuto = data.getMinutes();
    segundo = data.getSeconds();    
    nome = prompt("Olá, qual é o seu nome?")

    switch(mes)
    {
        case 0 : mes = 'JANEIRO'; break;
        case 1 : mes = 'FEVEREIRO'; break;
        case 2 : mes = 'MARÇO'; break;
        case 3 : mes = 'ABRIL'; break;
        case 4 : mes = 'MAIO'; break;
        case 5 : mes = 'JUNHO'; break;
        case 6 : mes = 'JULHO'; break;
        case 7 : mes = 'AGOSTO'; break;
        case 8 : mes = 'SETEMBRO'; break;
        case 9 : mes = 'OUTUBRO'; break;
        case 10 : mes = 'NOVEMBRO'; break;
        case 11 : mes = 'DEZEMBRO'; break;
    }
    
    relogio();
};

// Funcção de funcionamento do relogio
function relogio()
{
    segundo++; // atribundo  +1 ao contador de segundos

    if (segundo == 60) // quando segundo for igual a 60 entrará no IF para tratar os minutos
    {
        segundo = 0; // segundo é zerado
        minuto++; // minuto recebe +1
        
        if (minuto == 60) // similar ao IF dos segundos porem para minuto
        {  
            minuto = 0;
            hora++;

            if(hora == 24) // quando chegar a meia noite o contador de horas irá zerar
            {
                hora = 0;
            };
        };
    };
    
    escrever('segundo', segundo); // chama a função escrever passando o paramentro com nome do Id e valor que será aplicado
    escrever('minuto', minuto);    // chama a função escrever passando o paramentro com nome do Id e valor que será aplicado
    escrever('hora', hora); // chama a função escrever passando o paramentro com nome do Id e valor que será aplicado
    escrever('dia', dia);
    escrever('mes', mes);
    escrever('ano', ano);
    escrever('nome', nome);
    animar = setTimeout(relogio,1000); // aplica o temporizador de 1s para repetir a função
};

function escrever(id,valor) // função que recebe Id do elemento HTML que será mudado e seu novo valor
{
    if (valor < 10)  // se o valor for inferior a "10" é a adicionado um 0 antes dele para exibição formatada "HH:MM:SS"
    {
        valor = '0' + valor; 
    };
    document.getElementById(id).innerHTML=valor; //insere o valor no html onde id = id
};

window.onload=init;


