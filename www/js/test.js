function generateNewImages() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://immense-coast-69059.herokuapp.com/generate";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log("hoorah");
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}