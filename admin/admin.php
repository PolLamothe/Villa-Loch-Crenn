<?php
    $display = "";
    $file = fopen('../PHP/reserve.txt','r');
    $nombre_de_ligne = count(file('../PHP/reserve.txt'));
    $monfichier = file('../PHP/reserve.txt');
    $display = "";

    for($i = 0;$i < $nombre_de_ligne;$i++){
        $display = $display.fgets($file)."<br>";
    }

    require "../PHP/credentials.php";

    echo <<<HTML
        <html>
        <head>
            <meta charset="utf-8">
            <title>Admin Page</title>
            <link rel="stylesheet" href="../css/admin.css">
        </head>
        <body>
            <div>
                <button id='listbutton'>Voir les réservations</button>
                <p style='display:none;' id="list">$display</p>
            </div>
            <div id="panelDiv">
                <div>
                    <form method='post' action='../PHP/add.php' target="_blank">    
                        <label for='startdate1'>Date de début</label> 
                        <input type="date" name='startdate1' required>
                        <label for='enddate1'>Date de fin</label>
                        <input type='date' name='enddate1' required>
                        <input type="submit" name='valider1' value="Ajouter">
                        <input type="text" style='display:none;' value=$secureKey name='secure'>
                    </form>
                </div>
                <div >
                    <form method="post" target="_blank" action="../PHP/delete.php">
                        <label for='startdate2'>Date de début</label>
                        <input type='date' name='startdate2'required>
                        <label for='enddate2'>Date de fin</label>
                        <input type='date' name='enddate2'required>
                        <input type="submit" name="2" value="Supprimer">
                        <input type='text' name='secure' value=$secureKey style='display:none;'>
                    </form>
                </div>
            </div>
            <script src='../js/admin.js' type='text/javascript'></script>
        </body>
        </html>
        
        HTML;
?>