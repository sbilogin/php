<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bill Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            color: #007bff;
        }

        form {
            margin-bottom: 20px;
        }

        label {
            font-weight: bold;
        }

        input[type="text"],
        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        input[type="submit"] {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .bill-container {
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .bill-details {
            text-align: center;
        }

        .bill-details h3 {
            color: #007bff;
            margin-bottom: 20px;
        }

        .bill-details p {
            margin-bottom: 10px;
        }

        .bill-details p span {
            font-weight: bold;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Electricity Bills</h2>
        <div class="row">
            <div class="col-md-6 form-container">
                <form id="electricityForm" method="post" class="mt-3">
                    <div class="form-group">  
                        <label>Enter Name:</label>
                        <input type="text" id="name" placeholder="Enter Name" name="name" required>
                        <br> 
                        <label>Bill No:</label>
                        <input type="number" id="number" placeholder="Enter bill number" name="no" required>
                        <br>
                        <label>Enter Unit:</label>
                        <input type="number" id="units" placeholder="Enter Units" name="units" required>
                    </div>
                    <center><input type="submit" value="calculate"></center>
                </form>
            </div>
            <div class="col-md-6">
                <table class="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th>Units Range</th>
                            <th>Rate (Rs./unit)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Up to 50</td>
                            <td>3.50</td>
                        </tr>
                        <tr>
                            <td>51 - 150</td>
                            <td>4.00</td>
                        </tr>
                        <tr>
                            <td>151 - 250</td>
                            <td>5.20</td>
                        </tr>
                        <tr>
                            <td>Above 250</td>
                            <td>6.50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="bill-container">
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $name = $_POST["name"];
                $units = $_POST["units"];
                $no = $_POST["no"];
                $totalBillAmount = 0;

                if ($units <= 50) {
                    $totalBillAmount = $units * 3.5;
                } elseif ($units <= 150) {
                    $totalBillAmount = 50 * 3.5 + ($units - 50) * 4.0;
                } elseif ($units <= 250) {
                    $totalBillAmount = 50 * 3.5 + 100 * 4.0 + ($units - 150) * 5.2;
                } else {
                    $totalBillAmount = 50 * 3.5 + 100 * 4.0 + 100 * 5.2 + ($units - 250) * 6.5;
                }
            ?>
            <div class="bill-details">
                <h3>Electricity Bill</h3>
                <p><span>Name:</span> <?php echo $name; ?></p>
                <p><span>Bill Number:</span> <?php echo $no; ?></p>
                <p><span>Total Bill Amount:</span> <?php echo number_format($totalBillAmount, 2)." Rs."; ?></p>
            </div>
            <?php } ?>
        </div>
    </div>
</body>
</html>
