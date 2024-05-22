<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle form submission for adding a new complaint
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $complaint = $_POST['complaint'];

    $insertQuery = "INSERT INTO complaint (name, phone, email, complaint) VALUES ('$name', '$phone', '$email', '$complaint')";
    $insertResult = mysqli_query($conn, $insertQuery);

    if ($insertResult) {
        header("Location: admin.php"); // Redirect to the view page after successful insert
        exit();
    } else {
        echo "Error adding complaint: " . mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Complaint</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            background-color: #f8f9fa;
        }

        .container {
            max-width: 800px;
            margin: auto;
            margin-top: 50px;
        }

        h2 {
            text-align: center;
        }

        form {
            margin-top: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Add Complaint</h2>

    <form method="post">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" name="name" required>
        </div>

        <div class="form-group">
            <label for="phone">Phone:</label>
            <input type="text" class="form-control" id="phone" name="phone" required>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" name="email" required>
        </div>

        <div class="form-group">
            <label for="complaint">Complaint:</label>
            <textarea class="form-control" id="complaint" name="complaint" rows="3" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Add Complaint</button>
    </form>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>
</html>
