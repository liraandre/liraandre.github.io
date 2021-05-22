var botaoNovidades = document.querySelector('.novidades button');
var botaoMaisVendidos = document.querySelector('.mais-vendidos button');

$('.novidades button').click(function()
{
    $('.novidades').toggleClass('painel-aberto');
    
    if(botaoNovidades.textContent == "Mostrar mais")
    {
        botaoNovidades.textContent = "Mostrar menos";
    }
    else
    {
        botaoNovidades.textContent = "Mostrar mais";
    }
});

$('.mais-vendidos button').click(function()
{
    $('.mais-vendidos').toggleClass('painel-aberto');

    if(botaoMaisVendidos.textContent == "Mostrar mais")
    {
        botaoMaisVendidos.textContent = "Mostrar menos";
    }
    else
    {
        botaoMaisVendidos.textContent = "Mostrar mais";
    }
});