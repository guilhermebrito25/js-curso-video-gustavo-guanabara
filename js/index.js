function carregar(){
    var data = new Date()
    var horario = data.getHours()

    var txt = window.document.getElementById('txt-hora')
    var img = window.document.getElementById('img-hora')

    txt.innerHTML = `Agora são ${horario} Horas!`

    if (horario >= 0 && horario <= 11) {
        img.src = '/context/imagens/manha-circulo.png'
        document.body.style.background = '#dabd9d'
    } else if (horario >= 12 && horario <= 17) {
        img.src = '/context/imagens/tarde-circulo.png'
        document.body.style.background = '#df8054'
    } else {
        img.src = '/context/imagens/noite-circulo.png'
        document.body.style.background = '#575a87'
    }


}

