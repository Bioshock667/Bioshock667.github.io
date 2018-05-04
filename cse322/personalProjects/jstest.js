document.getElementById("button").onclick = banana();
document.getElementById('apple').onclick = function() {
    document.getElementById("para").innerHTML = "banana";
}

function apple() {
    document.getElementById("para").innerHTML = "apple";
}