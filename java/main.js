
let Toggle = document.getElementById('Toggle').style.background = 'rgba(56,96,119,1)', trasnsition ='5s';
let miVercel = document.getElementById('miWebSide');
let contacto = document.getElementById('miLinkContacto');
let perfil = document.querySelector('miLinkPerfil');




miVercel.addEventListener('click', () =>{
    window.location.href='https://daani4734.github.io/miCvDigital.github.io/';
});


perfil.addEventListener('focus', ()=>{
    window.location.href = "https://github.com/Daani4734/miCvDigital.github.io/blob/main/img/imgCurricula.gif";
});
