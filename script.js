
function passar(){
    let char = window.document.getElementById('chars').value
    console.log = `${char}`
    
    var kawArray = ['Fez amizade com um animal', 'Nada digno de nota', 'A pousada se saiu mal','A pousada se saiu bem', 'Fez um novo amigo', 'Perdeu um amigo', 'Teve um acesso de raiva', 'Um romance começou a brotar', 'Romance ou flerte rápido que não foi para frente', 'Performance estelar no futebol', 'Performance ruim no futebol', 'Performance estelar na banda', 'Performance ruim na banda', 'Fez uma viagem divertida com a família', 'Fez uma viagem péssima com a família', 'Cuidou de um parente doente em casa', 'Performance exemplar na escola', 'Performance ruim na escola', 'Se envolveu em uma briga e se deu bem', 'Se envolveu em uma briga e se deu mal', 'Se machucou e teve que ir no hospital', 'Ficou doente e teve que ir no hospital'];
    var kawArray = kawArray[Math.floor(Math.random() * kawArray.length)]
    
    var dendeArray = ['Conseguiu encantar pessoas com uma historia', 'Falhou de forma espetacular em contar uma historia', 'Nada digno de nota', 'O restaurante se saiu mal','O restaurante se saiu bem', 'Fez um novo amigo', 'Perdeu um amigo', 'Viveu uma aventura', 'Um romance começou a brotar','Romance ou flerte rápido que não foi para frente', 'Performance estelar na banda', 'Performance ruim na banda', 'Cuidou de um parente doente em casa', 'Performance exemplar na escola', 'Performance ruim na escola', 'Se envolveu em uma briga e se deu bem', 'Se envolveu em uma briga e se deu mal', 'Se machucou e teve que ir no hospital', 'Ficou doente e teve que ir no hospital'];
    var dendeArray = dendeArray[Math.floor(Math.random() * dendeArray.length)]
    
    carArray = ['Um stalker obsessivo passou do limite', 'Recebeu um convite de trabalho como modelo', 'Nada digno de nota', 'Os negócios do pai não foram bem','Os negócios do pai foram bem', 'Fez um novo amigo', 'Perdeu um amigo', 'Teve uma vingança', 'Um romance começou a brotar', 'Romance ou flerte rápido que não foi para frente', 'Performance estelar no futebol', 'Performance ruim no futebol', 'Performance boa no teatro', 'Performance ruim no teatro', 'Ganhou um papel importante em uma peça', 'Perdeu um papel importante em uma peça', 'Fez uma viagem divertida com a família', 'Fez uma viagem péssima com a família','Performance exemplar na escola', 'Performance ruim na escola', 'Se envolveu em uma briga e se deu bem', 'Se envolveu em uma briga e se deu mal', 'Se machucou e teve que ir no hospital', 'Ficou doente e teve que ir no hospital'];
    var carArray = carArray[Math.floor(Math.random() * carArray.length)]
    
    var nikArray = ['Fez uma mágica impressionante', 'Uma mágica deu errado de forma desastrosa', 'Nada digno de nota', 'Crise no parque de trailers','Coisas bem no parque de trailers', 'Fez um novo amigo', 'Perdeu um amigo', 'Se deu mal pela curiosidade', 'Um romance começou a brotar', 'Romance ou flerte rápido que não foi para frente', 'Performance exemplar na escola', 'Se envolveu em uma briga e se deu bem', 'Se envolveu em uma briga e se deu mal','Se machucou e teve que ir no hospital', 'Ficou doente e teve que ir no hospital'];
    var nikArray = nikArray[Math.floor(Math.random() * nikArray.length)]

    if (char == "Dende"){ 
    res.innerHTML = `${dendeArray}`
}
else if (char == "Lykos") {
            res.innerHTML = `${kawArray}`
        }
else if (char == "Carthal") {
  
    res.innerHTML = `${carArray}`
        }
else if (char == "Nick Flamel") {

    res.innerHTML = `${nikArray}`
        }
else {
    window.alert('Escolha um personagem válido!')
}
}
function passarprop(){
    var propArray = ['O Salão gerou muito glamour', 'O Salão gerou pouco glamour','Quimeras causaram problemas no Salão', 'Quimeras amigáveis começaram a frequentar o Salão', 'Kithain hostis causaram problemas no Salão', 'Kithain amigáveis tiveram um bom tempo no Salão', 'Nada digno de nota', 'A Condessa pede mais dross que de costume', 'A Condessa presenteia o Salão', 'Uma profecia de Zoltar ajudou muito', 'Uma profecia de Zoltar causou muitos problemas'];
    var propArray = propArray[Math.floor(Math.random() * propArray.length)]
    res.innerHTML = `${propArray}`}
