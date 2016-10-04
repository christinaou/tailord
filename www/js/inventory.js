var selected = "closet";

function closetButton () {
    show(document.getElementById('closet'));
    hide(document.getElementById('favorited'));
    if (selected == "fav") {
      document.getElementById('favoritedbutton').style.color = '#9E968E';
      document.getElementById('closetbutton').style.color = '#383534';
      selected = "closet";
    }
    console.log("closet");
}

function favoritedButton () {
    show(document.getElementById('favorited')),
    hide(document.getElementById('closet'));
    if (selected == "closet") {
      document.getElementById('closetbutton').style.color = '#9e968e';
      document.getElementById('favoritedbutton').style.color = '#383534';
      selected = "fav";
    }
    console.log("fav");
}

function hide (elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}

function show (elements, specifiedDisplay) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = specifiedDisplay || 'block';
  }
}