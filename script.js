function calculateFLAMES() {
    var boyName = document.getElementById("boyName").value.trim().toLowerCase();
    var girlName = document.getElementById("girlName").value.trim().toLowerCase();

    if (boyName === "" || girlName === "") {
        alert("Please enter both names.");
        return;
    }

    var flames = ["F", "L", "A", "M", "E", "S"];  // F = Friends, L = Love, A = Affection, M = Marriage, E = Enemies, S = Sister
    var count = countCommonLetters(boyName, girlName);

    // Calculate the FLAMES result based on common letters count
    while (flames.length > 1) {
        var index = count % flames.length;
        index = index === 0 ? flames.length - 1 : index - 1;
        flames.splice(index, 1);
    }

    var result = flames[0];
    displayResult(result);
}

function countCommonLetters(boyName, girlName) {
    // Removing spaces and counting common letters between boyName and girlName
    boyName = boyName.replace(/\s/g, "");
    girlName = girlName.replace(/\s/g, "");

    var count = 0;
    for (var i = 0; i < boyName.length; i++) {
        if (girlName.indexOf(boyName[i]) !== -1) {
            count++;
            girlName = girlName.replace(boyName[i], "");  // Remove matched letter to avoid double counting
        }
    }
    return count;
}

function displayResult(result) {
    var resultText = "";
    var body = document.body;

    switch (result) {
        case "F":
            resultText = "Friends!";
            body.className = "friends";
            break;
        case "L":
            resultText = "Love!";
            body.className = "love";
            break;
        case "A":
            resultText = "Affection!";
            body.className = "friends";
            break;
        case "M":
            resultText = "Marriage!";
            body.className = "marriage";
            break;
        case "E":
            resultText = "Enemies!";
            body.className = "enemies";
            break;
        case "S":
            resultText = "Brother and Sister!";
            body.className = "brother-sister";
            break;
    }

    document.getElementById("result").innerHTML = resultText;
}
