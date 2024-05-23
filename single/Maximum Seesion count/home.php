<?php
    session_start();
    $username = $_SESSION['username'];
    checkAndUpdateSessions();
    echo "<center><h2>Welcome! $username this session is active.<br></h2></center>";
    echo "<center><h2>Session Counter: ".$_SESSION['session_counter']."<br></h2></center>";

    function checkAndUpdateSessions() {
        $maxSessions = 3;
    
        if (!isset($_SESSION['session_counter'])) {
            $_SESSION['session_counter'] = 0;
        }
    
        if ($_SESSION['session_counter'] >= $maxSessions) {
            echo "<center><h2>Maximum number of sessions reached. Please try again later.<br></h2></center>";
            ?>
            <center><button style="font-size: 16px; background-color: #f44336; text-decoration: none; padding: 15px 32px;"><a href="logout.php">Logout</a></button><center><?php
            exit();
        }
    
        $_SESSION['session_counter']++;
    }
?>


<!--
Cookies are small pieces of data stored on the client-side,
 suitable for persisting data across sessions and browser restarts, but with size and security limitations.
Sessions are server-side storage mechanisms, providing a more secure way to store data temporarily while the
user navigates your web application, expiring when the browser is closed or after a set period of inactivity. 

a session is a way to store information (in variables) to be used across multiple pages. Unlike cookies,
 the data is not stored on the user's computer. Instead, session data is stored on the server, 
 and a unique session identifier (session ID) is sent to the client's browser to keep track of the session data.
-!>