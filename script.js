function select(name) {
  document.getElementById(name).style.background = "red";
}

function select2(name, oldname) {
  var someimage = document.getElementById(oldname);
  var theimg = someimage.getElementsByTagName('img')[0];
  var mysource = myimg.src;
  
  someimage.parentNode.removeChild(someimage);
  
  var img = document.createElement("img");
  img.src = mysource;
  var the_source = document.getElementById(name);
  the_source.append(img);
}
