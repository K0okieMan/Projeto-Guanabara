function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    msg.innerHTML = (`Agora são ${hora} horas e ${minu} minutos`)

    if (hora >= 5 && hora <= 12 ) {
        //bom dia 
        img.src = 'assets/manha.png'
        document.body.style.background = 'orange'
    } else if (hora >= 13 && hora <=18) {
        //boa tarde
        img.src = 'assets/tarde.png'
        document.body.style.background = 'rgb(5, 137, 253)'
    } else if (hora >= 18 && hora <= 24) {
        //boa noite
        img.src = 'assets/noite.png'
        document.body.style.background = '#3c3c3c'
    } else {
        //boa madrugada
        img.src = 'assets/noite.png'
        document.body.style.background = '#19191a'
    }
}
  