var color = "white";

function select(name) {
  color = document.getElementById(name).style.backgroundColor;
  document.getElementById(name).style.background = "red";
}

function undo(name) {
 document.getElementById(name).style.background = color; 
}

function select2(name, oldname) {
  var someimage = document.getElementById(oldname);
  var theimg = someimage.getElementsByTagName('img')[0];
  var mysource = theimg.src;
  var myalt = theimg.alt;
  
  theimg.parentNode.removeChild(theimg);
  someimage.style.background = color;
  
  var img = document.createElement("img");
  img.src = mysource;
  img.alt = myalt;
  var the_source = document.getElementById(name);
  var the_captured_piece = the_source.getElementsByTagName('img')[0];
  if (typeof the_captured_piece != 'undefined') {
      the_captured_piece.parentNode.removeChild(the_captured_piece);
  }
  the_source.append(img);
}

var old_button;
var turn = 0;
var step = 0;
var alt = "correct";
                        
$(document).click(function(event) {
    var type = event.target.tagName;
    if (type == 'DIV') {
        var button = event.target.getAttribute('id');
        alt = "correct";
    } else {
        var button = event.target.parentElement.getAttribute('id');
        var the_button = document.getElementById(button);
        var the_img = the_button.getElementsByTagName('img')[0];
        alt = the_img.alt;
    }
    
    if (step == 0) {
        if ((turn == 0 && alt=="white") || (turn == 1 && alt=="black") || alt=="correct") {
            old_button = button;
            step = 1;
            if ($(document.getElementById(button)).children('img').length) {
                select(button);
            } else {
                step = 0;
            }            
        } else {
            alert("It is not your turn!");
        }
    } else {
        step = 0;
        if (old_button == button) {
            undo(button);
        } else {
            select2(button, old_button);
            if (turn == 0) {
                turn = 1;
            } else {
                turn = 0;
            }
        }
    }
                    
});  
