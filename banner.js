var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannersSlogan = ["Promoção: Big City Night", "Promoção: Sunny Days"]
var Atual = 0;

function trocaBanner()
{
    Atual = (Atual + 1) % 2;
    banner = document.querySelector(".banner-destaque img");
    banner.src = banners[Atual];
    banner.alt = bannersSlogan[Atual];
}

var time = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function()
{
    if(controle.className == 'pause')
    {
        clearInterval(time);
        controle.className = 'play';
    }
    else
    {
        time = setInterval(trocaBanner, 4000);
        controle.className = 'pause';
    }

    return false;
}

var proximo = document.querySelector('.proximo')
var anterior = document.querySelector('.anterior')

proximo.onclick = function()
{
    if(Atual == (banners.length - 1))
    {
        Atual = 0;
        banner = document.querySelector(".banner-destaque img");
        banner.src = banners[Atual];
        banner.alt = bannersSlogan[Atual];
    }
    else
    {
        Atual += 1;
        banner = document.querySelector(".banner-destaque img");
        banner.src = banners[Atual];
        banner.alt = bannersSlogan[Atual];
    }

    return false;
}

anterior.onclick = function()
{
    if(Atual == 0)
    {
        Atual = (banners.length - 1)
        banner = document.querySelector(".banner-destaque img");
        banner.src = banners[Atual];
        banner.alt = bannersSlogan[Atual];
    }
    else
    {
        Atual -= 1;
        banner = document.querySelector(".banner-destaque img");
        banner.src = banners[Atual];
        banner.alt = bannersSlogan[Atual];
    }
}