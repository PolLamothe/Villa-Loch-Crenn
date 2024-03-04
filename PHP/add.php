<?php
    require "credentials.php"

    if($_POST['secure'] == $secureKey){
        $file = fopen('reserve.txt','r+');
        $nombre_de_ligne = count(file('reserve.txt'));
        $fseek = $nombre_de_ligne*22;
        fseek($file, $fseek);
        fwrite($file, $_POST["startdate1"]);
        fwrite($file, '/');
        fwrite($file, $_POST['enddate1']);
        fwrite($file, "\n");

        echo <<<HTML
        <html>
            <script>window.close()</script>
        </html>

        HTML;
    }
    else{
        echo'erreur d accès';
    }
?>