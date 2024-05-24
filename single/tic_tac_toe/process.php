<?php
session_start();

if (!isset($_SESSION['gameBoard'])) {
    $_SESSION['gameBoard'] = ['', '', '', '', '', '', '', '', ''];
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (isset($input['action']) && $input['action'] == 'restart') {
        $_SESSION['gameBoard'] = ['', '', '', '', '', '', '', '', ''];
        echo json_encode(['status' => 'restarted']);
        exit;
    }

    $cellIndex = $input['cellIndex'];
    $currentPlayer = $input['currentPlayer'];

    if ($_SESSION['gameBoard'][$cellIndex] === '') {
        $_SESSION['gameBoard'][$cellIndex] = $currentPlayer;
    }

    $winner = checkWinner($_SESSION['gameBoard']);
    if ($winner) {
        echo json_encode(['winner' => true]);
        exit;
    }

    if (!in_array('', $_SESSION['gameBoard'])) {
        echo json_encode(['draw' => true]);
        exit;
    }

    $nextPlayer = $currentPlayer === 'X' ? 'O' : 'X';
    echo json_encode(['nextPlayer' => $nextPlayer]);
}

function checkWinner($board) {
    $winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    foreach ($winningConditions as $condition) {
        [$a, $b, $c] = $condition;
        if ($board[$a] && $board[$a] === $board[$b] && $board[$a] === $board[$c]) {
            return true;
        }
    }

    return false;
}
?>
