<?php
    $file = fopen('reserve.txt', 'r');
    $date = date('y-m-d');
    $_POST['startdate'] = substr($_POST['startdate'],2,9);
    $_POST['enddate'] = substr($_POST['enddate'],2,9);
    $state = true;

    while (!feof($file) & $state == true)
	{
		/*On lit la ligne courante*/
		$buffer = fgets($file, 255);
        $startdate = substr($buffer,0,10);
        $enddate = substr($buffer,10,10);
		
        $origin = new DateTime($_POST['startdate']);
        $target = new DateTime($_POST['enddate']);
        $interval = $origin->diff($target);
        
        if($interval->format('%R%d') < 7){
            echo '<script>alert("Les réservations sont d une semaine minimum")</script>';
            echo '<SCRIPT>javascript:window.close()</SCRIPT>';
        }

        $tmstp1 = strtotime($startdate);
        $tmstp2 = strtotime($enddate);
        $tmstp3 = strtotime($_POST['startdate']);
        $tmstp4 = strtotime($_POST['enddate']);
        
        if($tmstp3 > $tmstp2 & $tmstp3 < $tmstp1){ //si les gens veulent venir après que des vacanciers soient arrivés mais ils arrivent avant que les vacanciers ne partent
            $state = false;
            echo '1';
        }elseif($tmstp3 == $tmstp1){ //si les gens veulent venir en même temp que des vacanciers arrivent
            $state = false;
            echo'2';
        }elseif($tmstp3 < $tmstp2 & $tmstp4 > $tmstp2){ //si les gens veuelnt venir avant que les vacanciers arrivent mais qu'ils veulents partirs après que ces derniers soient arrivés
            $state = false;
            echo'3';
        }elseif($tmstp4 == $tmstp2){
            $state = false;
            echo'4';
        }
	}
	fclose($file);
    if($state == false){
        echo '<script>alert("Date non disponible")</script>';
        echo '<SCRIPT>javascript:window.close()</SCRIPT>';
    }elseif($state == true){
        echo '<script>alert("Date disponible")</script>';
        echo '<SCRIPT>javascript:window.close()</SCRIPT>';
    }
	
?>