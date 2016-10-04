function topsButton () {
  show(document.getElementById('tops'));
  hide(document.getElementById('bottoms'));
  hide(document.getElementById('home'));
  console.log("top");
}

function bottomsButton () {
  show(document.getElementById('bottoms')),
  hide(document.getElementById('tops'));
  hide(document.getElementById('home'));
  console.log("bottom");
}

function homeButton () {
  show(document.getElementById('home')),
  hide(document.getElementById('tops'));
  hide(document.getElementById('bottoms'));
  console.log("bottom");
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

function changeImageTop (imgsrc) {
  document.getElementById('imgTop').src = imgsrc;
  // document.getElementById('imgTop').style.width = "140px";
  homeButton();
}

function changeImageBottom (imgsrc) {
  document.getElementById('imgBot').src = imgsrc;
  // document.getElementById('imgBot').style.width = "150px";
  homeButton();
}
