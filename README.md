<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saltador de Tempo</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
   <header>
    <h1>Saltador de Tempo</h1>
   </header> 
   <section>
    <div id="kith" class="kith">
    <p>
            <label>Seu Personagem: </label>
            <select id="chars">
                <option value="1">   </option>
                <option value="Dende">Dende</option>
                <option value="Lykos">Lykos</option>
                <option value="Nick Flamel">Nicodemus</option>
                <option value="Carthal">Carthal</option>
            </select>
        </p>
    </div>
    <div id="butt">
        <p><button type="button"class="button button1" onclick="passar()">Passar o Tempo no Personagem</button>  <button type="button"class="button button1" onclick="passarprop()">Passar o Tempo no Salão dos Espelhos</button></p> 
     </div>
    <div id="res">
       <p>...</p> 
    </div>
   </section>
   <footer>
    <p>&copy; Kithain Productions</p>
   </footer>
   <script src="script.js"></script>
</body>
</html>
