function generateNewImages() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://immense-coast-69059.herokuapp.com/generate";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var Clothing = JSON.parse(this.responseText);
            console.log(Clothing);
            var top = Clothing.top;
            var bottom = Clothing.bottom;
            var colors = Clothing.colors;
            document.getElementById("topimage").src="../img/assets2/" + top;
            document.getElementById("bottomimage").src="../img/assets2/" + bottom;
            document.getElementById("colorpalette").src="../img/assets2/" + colors;
            console.log("hoorah");
            document.getElementById("heart").src="../img/heartempty.png";
            favoriteBool = false;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var favoriteBool = false;
function favorite() {
    if (!favoriteBool) {
        document.getElementById("heart").src="../img/heartfilled.png";
        console.log("fave");
        favoriteBool = true;
    }
    else {
        document.getElementById("heart").src="../img/heartempty.png";
        console.log("not fave");
        favoriteBool = false;
    }
}