<?php
    //Import PHPMailer classes into the global namespace
    //These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require '../PHPMailermaster/src/Exception.php';
    require '../PHPMailermaster/src/PHPMailer.php';
    require '../PHPMailermaster/src/SMTP.php';
    require "./credentials.php";

    //Load Composer's autoloader
    require '../vendor/autoload.php';

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 0;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = $sourceMail;                     //SMTP username
        $mail->Password   = $mailPassword;                               //SMTP password
        $mail->SMTPSecure = 'PHPMailer::ENCRYPTION_STARTTLS';            //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom($sourceMail, 'Villa Loch\'Crenn Contact');
        $mail->addAddress($destinationMail, 'Annie');     //Add a recipient
        //$mail->addAddress('ellen@example.com');               //Name is optional
        //$mail->addReplyTo('info@example.com', 'Information');
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');

        //Attachments
        //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Nouveaux Message de '.$_POST['name'];
        $saut = '<br>';
        $mail->Body    = $_POST['message'].$saut.$_POST['phone'].$saut.$_POST['email'].$saut.$_SERVER['REMOTE_ADDR'];
        //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        echo '<script>alert("Votre message a bien été envoyé")</script>';
        echo '<script>javascript:window.close()</script>';
    } catch (Exception $e) {
        echo '<script>alert("ERREUR votre message n\' pas été envoyé, Veuillez réessayer plus tard")</script>';
        echo '<script>javascript:window.close()</script>';
    }
?>
