<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f2f5;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .container {
            max-width: 400px;
            width: 100%;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
        }

        .container:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
            transition: border-color 0.3s ease;
        }

        input:focus {
            border-color: #007bff;
        }

        input[type="submit"] {
            background-color: #007bff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .message {
            margin-bottom: 20px;
            text-align: center;
            color: #007bff;
            font-weight: bold;
        }

        .message a {
            color: #007bff;
            text-decoration: none;
            transition: text-decoration 0.3s ease;
        }

        .message a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<div class="container">
    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = $_POST['username'];
        $password = $_POST['password'];

        setcookie('user', $username, time() + 3600);
        setcookie('pass', $password, time() + 3600);

        echo "<p class='message'>Registration successful! You can now <a href='login.php'>login</a>.</p>";
    }
    ?>

    <form method="post" action="">
        <h2>Register</h2>
        <label for="username">Username:</label>
        <input type="text" name="username" required>

        <label for="password">Password:</label>
        <input type="password" name="password" required>

        <input type="submit" value="Register">
    </form>
</div>

</body>
</html>

<script>
    // script.js
function startClock() {
    const canvas = document.getElementById('clockCanvas');
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    function drawClock() {
        context.clearRect(0, 0, width, height);

        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        context.font = '48px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = '#fff';
        context.fillText(`${hours}:${minutes}:${seconds}`, centerX, centerY);

        requestAnimationFrame(drawClock);
    }

    drawClock();
}

window.onload = startClock;

    </script>
 
<!--
A cookie is a small piece of data that a server sends to a user's web browser. 
The browser may store the cookie and send it back to the same server with later requests. 
Cookies are used to remember information about the user, such as their preferences, login details, 
or shopping cart contents.    


-!>