<?php
include("db.php");

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["update"])) {
    $id = $_POST["id"];
    $name = $_POST["name"];
    $designation = $_POST["designation"];

    $sql = "UPDATE employees SET name='$name', designation='$designation' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        //     // The function json_encode takes a PHP array or object and converts it into a JSON formatted string.

        echo json_encode(["success" => true, "message" => "Record updated successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error updating record: " . $conn->error]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}

$conn->close();

?>