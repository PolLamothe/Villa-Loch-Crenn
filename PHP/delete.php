<?php
    require "credentials.php"
    if($_POST['secure'] == $secureKey){
        $file = fopen('reserve.txt','r+');
        $file_name = file('reserve.txt');
        $datedelete = $_POST['startdate2'].'/'.$_POST['enddate2']."\n";

        $content = str_replace($datedelete,"",$file_name);
        file_put_contents('reserve.txt', $content);
        fclose($file);
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