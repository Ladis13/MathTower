<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="index.css">
    <title>Tower</title>
</head>

<body>
    <div id="stage">
        <h3>Étage </h3>
        <h3 id="stage-num"></h3>
    </div>
    <form>
        <label id="calc"></label><br>
        <input id="result" type="number"><br>
        <button id="submit">Submit</button>
    </form>

    <div id="log">
        <div id="log-top">
            <label class="log-stage">Log</label>
            <label class="log-calc">Calcul</label>
            <label class="log-response">Réponse</label>
            <label class="log-status">Résultat</label>
        </div>

        <?php
            for ($i = 0; $i < 10; $i = $i + 1) {
                include "log_line.php";
            }
        ?>
    </div>

</body>
</html>

<script src="log.js"></script>
<script src="test.js"></script>