<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Transformation</title>
    <link rel="stylesheet" href="Stylesheet.css">

    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f2f5;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            padding: 20px;
            flex-direction: column;
        }

        form {
            max-width: 500px;
            width: 100%;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
            margin-bottom: 20px;
        }

        form:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
            color: #333;
        }

        input[type="text"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            box-sizing: border-box;
            margin-bottom: 20px;
            font-size: 16px;
        }

        input[type="submit"] {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
            margin-bottom: 10px;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .result {
            max-width: 500px;
            width: 100%;
            padding: 20px;
            background-color: #e9f7fd;
            border: 2px solid #007bff;
            border-radius: 10px;
            text-align: center;
            font-size: 18px;
            color: #333;
            font-weight: bold;
            margin-top: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
        }

        .result:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>

<body>

    <form method="post">
        <label for="inputString">Enter a string:</label>
        <input type="text" id="inputString" name="inputString" required>
        <input type="submit" name="toUpperCase" value="Transform to Uppercase">
        <input type="submit" name="toLowerCase" value="Transform to Lowercase">
        <input type="submit" name="capitalizeFirst" value="Capitalize First Character">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $inputString = $_POST['inputString'];
        echo '<div class="result">';
        if (isset($_POST['toUpperCase'])) {
            echo strtoupper($inputString);
        } elseif (isset($_POST['toLowerCase'])) {
            echo strtolower($inputString);
        } elseif (isset($_POST['capitalizeFirst'])) {
            echo ucfirst($inputString);
        }
        echo '</div>';
    }
    ?>

</body>

</html>
