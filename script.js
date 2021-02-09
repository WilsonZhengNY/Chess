var color = "white";

function select(name) {
  color = document.getElementById(name).style.backgroundColor;
  document.getElementById(name).style.background = "red";
}

function select2(name, oldname) {
  var someimage = document.getElementById(oldname);
  var theimg = someimage.getElementsByTagName('img')[0];
  var mysource = theimg.src;
  
  theimg.parentNode.removeChild(theimg);
  someimage.style.background = color;
  
  var img = document.createElement("img");
  img.src = mysource;
  var the_source = document.getElementById(name);
  var the_captured_piece = the_source.getElementsByTagName('img')[0];
  the_captured_piece.parentNode.removeChild(the_captured_piece);
  the_source.append(img);
}
