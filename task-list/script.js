

function passar(){
    let char = window.document.getElementById('chars').value
    console.log = `${char}`
    
    var kawArray = ['Fez amizade com um animal', 'Nada digno de nota', 'A pousada se saiu mal','A pousada se saiu bem', 'Fez um novo amigo', 'Perdeu um amigo', `Teve um destrutivo<br>acesso de raiva</br>`, 'Um romance começou a brotar', 'Se deu mal pela curiosidade', `Romance ou flerte rápido que não<br>foi para frente</br>`, 'Performance estelar no futebol', 'Performance ruim no futebol', 'Performance estelar na banda', 'Performance ruim na banda', 'Fez uma viagem divertida com a família', 'Fez uma viagem péssima com a família', 'Cuidou de um parente doente em casa', 'Performance exemplar na escola', 'Performance ruim na escola', `Se envolveu em uma briga<br>e se deu bem</br>`, `Se envolveu em uma briga<br>e se deu mal</br>`, 'Se machucou e teve que ir no hospital', 'Ficou doente e teve que ir no hospital', 'Descobriu coisas novas sobre o Sonhar', `Perdeu uma oportunidade<br>por causa da impaciência</br>`,'Descobriu um novo interesse', 'Encontrou um novo prazer', `Se deu mal ao se entregar<br>demais a tentação</br>`];
    var kawArray = kawArray[Math.floor(Math.random() * kawArray.length)]
    
    var dendeArray = [`Conseguiu encantar pessoas<br>com uma historia</br>`, `Falhou de forma espetacular<br>em contar uma historia</br>`, 'Nada digno de nota', `O restaurante se saiu mal`,'O restaurante se saiu bem', 'Fez um novo amigo', 'Perdeu um amigo', `O desafiaram a algo imprudente<br>e ele se saiu bem</br>`, `O desafiaram a algo imprudente<br>e ele se saiu mal</br>`, 'Um romance começou a brotar',`Romance ou flerte rápido que não<br>foi para frente</br>`, 'Performance estelar na banda', 'Performance ruim na banda', 'Cuidou de um parente doente em casa', 'Performance exemplar na escola', 'Performance ruim na escola', `Se envolveu em uma briga<br>e se deu bem</br>`, `Se envolveu em uma briga<br>e se deu mal</br>`, 'Se machucou e teve que ir no hospital', 'Ficou doente e teve que ir no hospital', 'Descobriu coisas novas sobre o Sonhar', `A Língua do Bardo fez algo desastroso<br>acontecer</br>`, `Perdeu uma oportunidade<br>por causa da impaciência</br>`,'Descobriu um novo interesse', 'Encontrou um novo lugar por si mesmo', 'Perdeu uma oportunidade pela pobreza'];
    var dendeArray = dendeArray[Math.floor(Math.random() * dendeArray.length)]
    
    carArray = ['Um stalker obsessivo passou do limite', `Recebeu um convite de trabalho como<br>modelo</br>`, 'Nada digno de nota', 'Os negócios do pai não foram bem','Os negócios do pai foram bem', 'Fez um novo amigo', 'Perdeu um amigo', 'Teve uma vingança destrutiva', 'Um romance começou a brotar', `Romance ou flerte rápido que não<br>foi para frente</br>`, 'Performance estelar no futebol', 'Performance ruim no futebol', 'Performance boa no teatro', 'Performance ruim no teatro', `Ganhou um papel importante<br>em uma peça</br>`, `Perdeu um papel<br>importante em uma peça</br>`, 'Fez uma viagem divertida com a família', 'Fez uma viagem péssima com a família','Performance exemplar na escola', 'Performance ruim na escola', `Se envolveu em uma briga<br>e se deu bem</br>`, `Se envolveu em uma briga<br>e se deu mal</br>`, 'Se machucou e teve que ir no hospital', 'Ficou doente e teve que ir no hospital', 'Descobriu coisas novas sobre o Sonhar', 'Descobriu um novo interesse', `Se envolveu em uma pequena<br>intriga de corte</br>`, `Se desentendeu com um Kithain<br>que questionou a honra Gwydion</br>`, `Perdeu uma oportunidade por estar<br>jogando video-game</br>`];
    var carArray = carArray[Math.floor(Math.random() * carArray.length)]
    
    var nikArray = ['Fez uma mágica impressionante', `Uma mágica deu errado<br>de forma desastrosa</br>`, 'Nada digno de nota', 'Crise no parque de trailers',`Coisas bem no parque<br>de trailers</br>`, 'Fez um novo amigo', 'Perdeu um amigo', 'Se deu mal pela curiosidade', 'Um romance começou a brotar',`Romance ou flerte rápido que não<br>foi para frente</br>`, 'Performance exemplar na escola', `Se envolveu em uma briga<br>e se deu bem</br>`, `Se envolveu em uma briga<br>e se deu mal</br>`,'Se machucou e teve que ir no hospital', 'Ficou doente e teve que ir no hospital', 'Descobriu coisas novas sobre o Sonhar', 'Descobriu um novo interesse', `Um mecanismo falhou de<br>forma espetacular</br>`, `Criou um mecanismo que<br>impressionou não nockers</br>`, 'Perdeu uma oportunidade pela pobreza', `Se destacou nos exames de<br>aptidão escolares</br>`];
    var nikArray = nikArray[Math.floor(Math.random() * nikArray.length)]
    var img = document.createElement('img')
    img.style.width = "100px"
 
    if (char == "Dende"){ 
    res.innerHTML = `<img src=\"feshu.png\" width=\"50px\" height=\"50px\"width=\"10%\" height=\"10%\"> ${dendeArray}`}
else if (char == "Lykos") {
            res.innerHTML = `<img src=\"fsatiro.png\" width=\"50px\" height=\"50px\"width=\"10%\" height=\"10%\"> ${kawArray}`}
else if (char == "Carthal") {
  
    res.innerHTML = `<img src=\"fsidhe.png\" width=\"50px\" height=\"50px\"width=\"10%\" height=\"10%\"> ${carArray}`}
else if (char == "Nick Flamel") {

    res.innerHTML = `<img src=\"fnocker.png\" width=\"50px\" height=\"50px\"width=\"10%\" height=\"10%\"> ${nikArray}`}
else {
    window.alert('Escolha um personagem válido!')
}
}
function passarprop(){
    var propArray = ['O Salão gerou muito glamour', 'O Salão gerou pouco glamour','Quimeras causaram problemas no Salão', `Quimeras amigáveis começaram a<br>frequentar o Salão</br>`, `Kithain hostis causaram problemas<br>no Salão</br>`, `Kithain amigáveis tiveram <br>um bom tempo no Salão</br>`, 'Nada digno de nota', `A Condessa pede mais <br>lias que de costume</br>`, 'A Condessa presenteia o Salão', 'Uma profecia de Zoltar ajudou muito', `Uma profecia de Zoltar<br>causou muitos problemas</br>`, `Um kithain em perigo pediu<br>o Direito de Hospitalidade</br>`];
    var propArray = propArray[Math.floor(Math.random() * propArray.length)]
    res.innerHTML = `${propArray}` }

   let center2 = document.getElementById("center")
   let center3 = document.getElementById("Perfis 2")

   document.getElementById("Colinas").addEventListener("click", function(Condpg) {
    center2.innerHTML =`<img src=\"Hist/Colinas Sobre o Mar.png\" width=\"30%\" height=\"20%\" style=\"margin-left: auto; margin-right: auto; display: block;\">
    <h2 style=\"color: blueviolet; text-align: center;\">O Condado<br>das<br> Colinas Sobre o Mar</h2>
    <p>Era uma vez, em um lugar que línguas mortais chamam de Maine, mas o Povo chama de Ducado da Costa Rochosa, tudo estava em paz até a chegada da Guerra da Harmonia. A guerra chegou ao “Maine” na cidade de Camdem, no verão, com a hoste liderada pelo valoroso Duque Gallahan, vindo junto com a horda de mortais buscando o glamour da cidade. Ao chegar, ele nomeou a cidade o Condado das Colinas Sobre o Mar, “Maine” o Ducado da Costa Rochosa e começou a conquista do Ducado.
    </p>
    <p>O Condado das Colinas Sobre o Mar caiu rapidamente com exceção do farol, que defendido por uma tempestade invocada por um troll chamado Enfrentrovão teve uma demonstração tão bruta de glamour que historias sobre a Tempestade de Verão daquele ano ainda soam nas bocas mortais. Mesmo assim, o farol caiu porque o troll sozinho não era páreo para uma duzia de cavalheiros sidhe, mas Duque Gallahan reconhecendo o valor e honra de Enfrentatrovão, o poupou e o nomeou chanceller do agora batizado Baronato de Tempestaluz.</p>
    <p>
        O Duque usou o Condado como seu forte para espalhar a conquista pelo resto do Ducado e com exceção de uma forte resistencia troll e redcap na Batalha de Bangor, os plebeus eram dispersos e sem um lider para oferecer uma séria e coordenada resistencia.
    </p>
    <p>
        Então no inverno chegou uma missiva do Condado da Terra dos Portos ao Duque, falando de uma trégua e negociação, o Duque, que queria encerrar tudo sem mais sangue derramado, aceitou a oferta e começou sua viagem a ao Condado da Terra dos Portos sob uma bandeira de trégua. No caminho, porém, ele foi emboscado por uma vulturo de redcaps chamados Foiçadores que caíram sobre o corajoso Duque e sua guarda como cães selvagens, o Duque lutou valorosamente, matando muitos de seus covardes agressores, mas afligido por muitos golpes, ele caiu, e seu famoso tesouro, a Tiara de Mórgacht se perdeu na luta.
    </p>
    <p>
        Com a morte do Duque a guerra ficou mais violenta e feroz pelo Ducado, bandos de plebeus emboscavam e terrorizavam os nobres e grupos de cavalheiros sidhes caçavam e puniam quaisquer plebeus que encontrassem. Para a felicidade de todos, o Grande Rei David recuperou Caliburn e uniu o Reino sob o Tratado de Concordia, cessando todas as hostilidades entre plebeus e nobres, e o Ducado da Costa Rochosa conheceu paz de novo, sendo governado pelo antigo cavalheiro mais fiel de Duque Gallahan, o agora Duque Tyrgrion Velozolhos ap Gwydion, que governa de sua Propriedade Livre no Condado da Terra dos Portos.
    </p>`
});

    document.getElementById("Lykos").addEventListener("click", function(Lykospg) {
        center2.innerHTML =`<img src=\"Perfis/Thomas Twain Lykos Avatar.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
        <p><strong>Nome Féerico:</strong> Lykos <br>
        <strong>Nome Mortal:</strong> Thomas (Tom) Twain <br>
        <strong>Kith:</strong> Sátiro <br>
        <strong>Aspecto:</strong> Infante <br>
        <strong>Idade:</strong> 8 anos <br>
        <strong>Citação:</strong><i> "Sai daqui seu bundão!"</i></p>
        <p><strong>Ficha para Download</strong></p> 
       <p><li><a href="Ficha C20 - Lykos.pdf" download="Ficha C20 Lykos" type="application/pdf">Lykos</a></li></p>
       <img src=\"fsatiro.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
    });
    
    document.getElementById("Carthal").addEventListener("click", function(Carthalpg) {
        center2.innerHTML =`
        <img src=\"Perfis/VIncent James Kennedy Junior.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
        <p><strong>Nome Féerico:</strong> Carthal ap Gwydion <br>
        <strong>Nome Mortal:</strong> Vincent James Kennedy Junior <br>
        <strong>Kith:</strong> Sidhe Arcadiano <br>
        <strong>Aspecto:</strong> Infante <br>
        <strong>Idade:</strong> 10 anos <br>
        <strong>Citação:</strong><i> "Tão olhando para mim cara..."</i>
        <p><strong>Ficha para Download</strong></p> 
        <p><li><a href="Ficha Carthal ap Gwydion.pdf" download="Ficha C20 Carthal" type="application/pdf">Milorde Carthal</a></li></p></p>
        <img src=\"fsidhe.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`    
        });

    document.getElementById("Nicodemus").addEventListener("click", function(Nicodemuspg) {
            center2.innerHTML =`
            <img src=\"Perfis/Nick Flamel avatar.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
            <p><strong>Nome Féerico:</strong> Nicodemus <br>
            <strong>Nome Mortal:</strong> Nick Flamel <br>
            <strong>Kith:</strong> Nocker <br>
            <strong>Aspecto:</strong> Infante <br>
            <strong>Idade:</strong> 13 anos <br>
            <strong>Citação:</strong><i> "Isso vai dar certo cara, com certeza!"</i>
            <p><strong>Ficha para Download</strong></p> 
            <p><li><a href="Ficha Nicodemus Flamel - Nocker.pdf" download="Ficha C20 Nicodemus" type="application/pdf">Nicodemus</a></li></p></p>
            <img src=\"fnocker.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`    
            });
     
    document.getElementById("Dendê").addEventListener("click", function(Dendêpg) {
            center2.innerHTML =`
            <img src=\"Perfis/Dende2.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
            <p><strong>Nome Féerico:</strong> Dendê <br>
            <strong>Nome Mortal:</strong> Pedro <br>
            <strong>Kith:</strong> Exu <br>
            <strong>Aspecto:</strong> Infante <br>
            <strong>Idade:</strong> 12 anos <br>
            <strong>Citação:</strong><i> "Com certeza tem historia ai..."</i>
            <p><strong>Ficha para Download</strong></p> 
            <p><li><a href="Ficha Dendê.pdf" download="Ficha C20 Dende" type="application/pdf">Dende</a></li></p></p>
            <img src=\"feshu.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`  
            }); 
            
            
    document.getElementById("Ylenaria").addEventListener("click", function(Ylenariapg) {
                center2.innerHTML =`
                <img src=\"NPCS/Olivia Milton Vossa Excelencia Condessa Ylenaria Ap Eiluned.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
                <p>
        <strong>Nome Féerico:</strong> Ylenaria ap Eiluned <br>
        <strong>Nome Mortal:</strong> Olivia Milton <br>
        <strong>Kith:</strong> Sidhe Arcadiana <br>
        <strong>Aspecto:</strong> Estouvada <br>
        <strong>Idade:</strong> 21 anos <br>
        <strong>Citação:</strong><i> "Existem muitos segredos, aqueles que eu sei e aqueles que ainda não sei..."</i>
        </p>
        <img src=\"fsidhe.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
                });
                
    document.getElementById("Enfrentrovão").addEventListener("click", function(Enfrentpg) {
                    center2.innerHTML =`
                <img src=\"NPCS/Jacob Smith Milorde Barão Enfrentrovão ap Dougal troll.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
                <p>
    <strong>Nome Féerico:</strong> Enfrentrovão ap Dougal <br>
    <strong>Nome Mortal:</strong> Jacob Smith <br>
    <strong>Kith:</strong> Troll <br>
    <strong>Aspecto:</strong> Rezingão <br>
    <strong>Idade:</strong> Mais de 60 <br>
    <strong>Citação:</strong><i> "Não vá ao mar durante a geada garoto! É assim que as sereias te pegam..."</i>
        </p>
        <img src=\"NPCS/ftroll.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
                    });
                    
    document.getElementById("Rosaurora").addEventListener("click", function(Rosapg) {
                        center2.innerHTML =`
                <img src=\"NPCS/Jennifer Lady Rosaurora ap Fionna Estouvada Sidhe.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
            <p>
            <strong>Nome Féerico:</strong> Rosaurora ap Fionna <br>
            <strong>Nome Mortal:</strong> Jennifer <br>
            <strong>Kith:</strong> Sidhe Arcadiana <br>
            <strong>Aspecto:</strong> Estouvada <br>
            <strong>Idade:</strong> 19 anos <br>
            <strong>Citação:</strong><i> "Amor sem dor é como lutar sem se ferir, limpo demais..."</i>
                </p>
                <img src=\"fsidhe.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
                        });
                        
    document.getElementById("GuardaPétreo").addEventListener("click", function(Guardpg) {
                            center2.innerHTML =`
    <img src=\"NPCS/Brandon Sir GuardaPétreo ap Gwydion Estouvado Troll.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
    <p>
    <strong>Nome Féerico:</strong> GuardaPétreo ap Gywdion <br>
    <strong>Nome Mortal:</strong> Brandon <br>
    <strong>Kith:</strong> Troll <br>
    <strong>Aspecto:</strong> Estouvado <br>
    <strong>Idade:</strong> 17 anos <br>
    <strong>Citação:</strong><i> "Sua vontade é minha ordem Vossa Excelência..."</i>
        </p>
        <img src=\"NPCS/ftroll.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
        });

    
    document.getElementById("Mecanicado").addEventListener("click", function(Mecpg) {
            center2.innerHTML =`
<img src=\"NPCS/Richard Madison Mecanicado Chanceller Rezingão Nooker.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
<p>
<strong>Nome Féerico:</strong> Mecanicado <br>
<strong>Nome Mortal:</strong> Richard Madison <br>
<strong>Kith:</strong> Nocker <br>
<strong>Aspecto:</strong> Rezingão <br>
<strong>Idade:</strong> 31 anos <br>
<strong>Citação:</strong><i> "Que livro que ela quer? Ótimo, mais trabalho para mim!"</i>
</p>
<img src=\"fnocker.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
});

document.getElementById("Destinoando").addEventListener("click", function(Destpg) {
    center2.innerHTML =`
<img src=\"NPCS/Benjamin Destinoando Bardo Estouvado Exu.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
<p>
    <strong>Nome Féerico:</strong> Destinoando <br>
    <strong>Nome Mortal:</strong> Benjamin <br>
    <strong>Kith:</strong> Exu <br>
    <strong>Aspecto:</strong> Estouvado <br>
    <strong>Idade:</strong> 16 anos <br>
    <strong>Citação:</strong><i> "Eu nunca minto. Mas a mais em uma historia que fatos..."</i>
        </p>
        <img src=\"feshu.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
});

document.getElementById("Teiaescura").addEventListener("click", function(Teiapg) {
    center2.innerHTML =`
<img src=\"NPCS/Mary Tripoli Teiaescura Estouvada Escriba Sluagh.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
<p>
<strong>Nome Féerico:</strong> Teiaescura <br>
<strong>Nome Mortal:</strong> Mary Tripoli <br>
<strong>Kith:</strong> Sluagh <br>
<strong>Aspecto:</strong> Estouvado <br>
<strong>Idade:</strong> 17 anos <br>
<strong>Citação:</strong><i> "*Silenciosamente escreve em seu papiro*"</i>
    </p>
    <img src=\"NPCS/fsluagh.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
});

document.getElementById("Dançalouca").addEventListener("click", function(Dançapg) {
    center2.innerHTML =`
<img src=\"NPCS/Elizabeth Dançalouca Arauta Estouvada Sátira.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
<p>
<strong>Nome Féerico:</strong> Dançalouca <br>
<strong>Nome Mortal:</strong> Elizabeth <br>
<strong>Kith:</strong> Sátira <br>
<strong>Aspecto:</strong> Estouvada <br>
<strong>Idade:</strong> 16 anos <br>
<strong>Citação:</strong><i> "Nossa, que chifres grandes você tem..."</i>
    </p>
    <img src=\"fsatiro.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
});

document.getElementById("Ratonde").addEventListener("click", function(Ratondepg) {
    center2.innerHTML =`
<img src=\"NPCS/Eugene Ratonde Bufão Infante Pooka.jpg\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
<p>
<strong>Nome Féerico:</strong> Ratonde <br>
<strong>Nome Mortal:</strong> Eugene <br>
<strong>Kith:</strong> Pooka <br>
<strong>Aspecto:</strong> Infante <br>
<strong>Idade:</strong> 8 anos <br>
<strong>Citação:</strong><i> "Fui eu dona Condessa! Oh, você tá procurando o culpado..."</i>
    </p>
    <img src=\"NPCS/fpooka.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
});

document.getElementById("Maregeada").addEventListener("click", function(Marepg) {
    center2.innerHTML =`
<img src=\"NPCS/Brooklyn Maregeada Thane Infante Selkie 12 anos.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
<p>
<strong>Nome Féerico:</strong> Maregeada <br>
<strong>Nome Mortal:</strong> Brooklyn <br>
<strong>Kith:</strong> Selkie <br>
<strong>Aspecto:</strong> Infante <br>
<strong>Idade:</strong> 12 anos <br>
<strong>Citação:</strong><i> "Hei não joga lixo aí! Depois sou eu que tem que nadar na sujeira!"</i>
    </p>
    <img src=\"NPCS/fselkie.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
});

document.getElementById("Sanguespreita").addEventListener("click", function(Sanguepg) {
    center2.innerHTML =`
<img src=\"NPCS/Patrick Reed Sanguespreita Estouvado Redcap.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\">
<p>
<strong>Nome Féerico:</strong> Sanguespreita <br>
<strong>Nome Mortal:</strong> Patrick Reed <br>
<strong>Kith:</strong> Redcap <br>
<strong>Aspecto:</strong> Estouvado <br>
<strong>Idade:</strong> 15 anos <br>
<strong>Citação:</strong><i> "Você tá morto babaca."</i>
    </p>
    <img src=\"NPCS/Logo_kith_redcap.png\" width=\"150px\" height=\"150px\"width=\"50%\" height=\"50%\" style=\"margin-left: 25%; margin-right: auto;\">`
});
      
            
    