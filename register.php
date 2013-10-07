<?php
    $con = mysqli_connect("localhost","root","password","photography");
    if(mysqli_connect_errno($con)){
        echo "Failed to connect to MySQL: ".mysqli_connect_error();
    }
    $q = mysqli_query($con,"insert into register(name,email,password) values ('".$_POST['name']."','".$_POST['email']."','".$_POST['password']."')");
    echo $q;
    mysqli_close($con);
?>