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
  the_source.append(img);
}
