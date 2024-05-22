<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Farmer Shopping System</title>
    <link rel="stylesheet" href="style.css">
    <style>

        li a{
            color:white;
            font-size:20px;
            text-decoration:none;
        }
        
    </style>


</head>
<body>
    <nav>
        <ul>
            <?php
            if (isset($_SESSION["username"])) {
                echo "<li><a href='index.php'>Home</a></li>";
                echo "<li><a href='menu.php'>Menu</a></li>";
                echo "<li><a href='logout.php'>Logout</a></li>";
            } else {
                echo "<li><a href='index.php'>Home</a></li>";
                echo "<li><a href='register.php'>Register</a></li>";
                echo "<li><a href='login.php'>Login</a></li>";
            }
            ?>
        </ul>
    </nav>

    
    <div class="content">
        <h1>Welcome to Shopping System </h1>
        <p>Order farmers equipments online !</p>
    </div>
    <footer>
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </footer>
</body>
</html>
