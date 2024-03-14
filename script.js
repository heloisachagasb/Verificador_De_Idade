function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resposta = document.querySelector('div#resposta')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/criancamas.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemmas.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultomas.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosomas.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/criancafem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemfem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultafem.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosafem.png')
            }
        }
    }
    resposta.innerHTML = `Detectamos ${genero} com ${idade} anos`
    resposta.appendChild(img)
}