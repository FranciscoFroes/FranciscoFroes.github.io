
function passar(){
    let char = window.document.getElementById('chars').value
    console.log = `${char}`
    if (char == "Dende"){
        var dendeArray = ['Conseguiu encantar pessoas com uma historia', 'Nada digno de nota', 'O restaurante se saiu mal','O restaurante se saiu bem', 'Fez um grande amigo na escola', 'Perdeu um amigo', 'Viveu uma aventura', 'Conheceu um potencial para um romance','Romance ou flerte rápido que não foi para frente', 'Performance estelar na banda', 'Performance ruim na banda'];
        var dendeArray = dendeArray[Math.floor(Math.random() * dendeArray.length)]
    res.innerHTML = `${dendeArray}`
}
else if (char == "Lykos") {
    var kawArray = ['Fez amizade com um animal', 'Nada digno de nota', 'A pousada se saiu mal','A pousada se saiu bem', 'Fez um grande amigo na escola', 'Perdeu um amigo', 'Teve um acesso de raiva', 'Conheceu um potencial para um romance', 'Romance ou flerte rápido que não foi para frente', 'Performance estelar no futebol', 'Performance ruim no futebol', 'Performance estelar na banda', 'Performance ruim na banda'];
            var kawArray = kawArray[Math.floor(Math.random() * kawArray.length)]
            res.innerHTML = `${kawArray}`
        }
else if (char == "Carthal") {
    carArray = ['Um stalker obsessivo passou do limite', 'Nada digno de nota', 'Os negócios do pai não foram bem','Os negócios do pai foram bem', 'Fez um grande amigo na escola', 'Perdeu um amigo', 'Teve uma vingança', 'Conheceu um potencial para um romance', 'Romance ou flerte rápido que não foi para frente', 'Performance estelar no futebol', 'Performance ruim no futebol', 'Performance boa no teatro', 'Performance ruim no teatro'];
    var carArray = carArray[Math.floor(Math.random() * carArray.length)]
    res.innerHTML = `${carArray}`
        }
else if (char == "Nick Flamel") {
    var nikArray = ['Fez uma mágica impressionante', 'Nada digno de nota', 'Crise no parque de trailers','Coisas bem no parque de trailers', 'Fez um grande amigo na escola', 'Perdeu um amigo', 'Se deu mal pela curiosidade', 'Conheceu um potencial para um romance', 'Romance ou flerte rápido que não foi para frente'];
    var nikArray = nikArray[Math.floor(Math.random() * nikArray.length)]
    res.innerHTML = `${nikArray}`
        }
else {
    window.alert('Escolha um personagem válido!')
}
}
