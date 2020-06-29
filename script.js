alert("This Website Is Not Made For mobile Devices or any other smaller Screen as you would not be able to Update your reume in Mobile Phones So better to open in Desktop Rest Is Your Choice");

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}


var c = 0;

function contact() {
  if (c == 0) {
    c = c + 1;
    document.getElementById("cont").innerHTML = "";
  } else {
    c = c - 1;
    document.getElementById("cont").innerHTML = "Github://abcxyz | Linkedln://xyzabc | CodeChef://absnx | HackerRank://absnxy";
  }
}
var co = 0;

function contact2() {
  if (co == 0) {
    co = co + 1;
    document.getElementById("cont").innerHTML = "Github://abcxyz | Linkedln://xyzabc ";
  } else {
    co = co - 1;
    document.getElementById("cont").innerHTML = "Github://abcxyz | Linkedln://xyzabc | CodeChef://absnx | HackerRank://absnxy";
  }

}


function adding(id){
  var i = 0;
  var n = document.querySelectorAll("#first" + id).length
  for (i = 0; i < n; i++) {

    document.querySelectorAll("#first" + id)[i].classList.add("align")
  }
}

function remove(id){
  var i = 0;
  var n = document.querySelectorAll("#first" + id).length
  for (i = 0; i < n; i++) {
    document.querySelectorAll("#first" + id)[i].classList.remove("align")
  }
}

var a=0;
var b=0;
var c=0;
var d=0;

function center(id) {

  switch (id) {
    case 'c1':
      if (a == 0) {
        a = a + 1;
       adding(id);
        }

      else {
        a = a - 1;
        remove(id);
      }
      break;

      case 'c2':
        if (b == 0) {
          b = b + 1;
          adding(id);
        }
        else {
          b = b - 1;
        remove(id);
        }
        break;

        case 'c3':
          if (c == 0) {
            c = c + 1;
            adding(id);
          }
          else {
            c = c - 1;
            remove(id);
          }
          break;

          case 'c4':
            if (d == 0) {
              d = d + 1;
              adding(id);
            }
            else {
              d = d - 1;
              remove(id);
            }
            break;

  }
}






function lllll(id) {
  if (a == 0) {
    a = a + 1;
    document.querySelector("#" + id).addEventListener("click", function() {

      var i = 0;
      var n = document.querySelectorAll("#first" + id).length
      for (i = 0; i < n; i++) {
        document.querySelectorAll("#first" + id)[i].classList.add("align")
      }
    });
  } else {
    a = a - 1;
    document.querySelector("#" + id).addEventListener("click", function() {

      var i = 0;
      var n = document.querySelectorAll("#first" + id).length
      for (i = 0; i < n; i++) {
        document.querySelectorAll("#first" + id)[i].classList.remove("align")
      }
    });
  }
}

function margin(id) {
  switch (id) {
    case 'm1':
      document.querySelector("#page").style.padding = "0.2cm 1cm 1cm 1cm";
      break;
    case 'm2':
      document.querySelector("#page").style.padding = "0.2cm 1.1cm 1cm 1.1cm";
      break;
    case 'm3':
      document.querySelector("#page").style.padding = "0.2cm 1.3cm 1cm 1.3cm";
      break;
    case 'm4':
      document.querySelector("#page").style.padding = "0.2cm 1.5cm 1cm 1.5cm";
      break;

    default:
      break;
  }
}

function spacing(id) {
  switch (id) {
    case 'ls1':
      document.querySelector("#page").style.lineHeight = "1em";
      break;
    case 'ls2':
      document.querySelector("#page").style.lineHeight = "1.3em";
      break;
    case 'ls3':
      document.querySelector("#page").style.lineHeight = "1.5em";
      break;
    case 'ls4':
      document.querySelector("#page").style.lineHeight = "1.6em";
      break;

    default:
      break;
  }
}


function font(id) {
  switch (id) {
    case 'f1':
      document.querySelector("#page").classList.remove("Tajawal")
      document.querySelector("#page").classList.remove("sans")
      document.querySelector("#page").classList.remove("monsta")
      document.querySelector("#page").classList.add("roboto")
      break;
    case 'f2':
      document.querySelector("#page").classList.remove("Tajawal")
      document.querySelector("#page").classList.remove("sans")
      document.querySelector("#page").classList.remove("monsta")
      document.querySelector("#page").classList.add("Tajawal")
      break;
    case 'f3':
      document.querySelector("#page").classList.remove("Tajawal")
      document.querySelector("#page").classList.remove("roboto")
      document.querySelector("#page").classList.remove("monsta")
      document.querySelector("#page").classList.add("sans")
      break;
    case 'f4':
      document.querySelector("#page").classList.remove("Tajawal")
      document.querySelector("#page").classList.remove("roboto")
      document.querySelector("#page").classList.remove("sans")
      document.querySelector("#page").classList.add("monsta")

      break;

  }
}

document.querySelector("#option2").addEventListener("click", function() {
  for (i = 0; i < 7; i++) {
    document.querySelectorAll("#h4")[i].classList.add("case")
  }
  document.querySelectorAll("label")[1].classList.add("active")
  document.querySelector("label").classList.remove("active")
});

document.querySelector("#option1").addEventListener("click", function() {
  for (i = 0; i < 7; i++) {
    document.querySelectorAll("#h4")[i].classList.remove("case")
  }
  document.querySelectorAll("label")[1].classList.remove("active")
  document.querySelector("label").classList.add("active")
});

function checkbox(id) {
  switch (id) {
    case 'check1':
      var c = document.querySelector("#check1").checked;
      if (c == true) {
        document.querySelector("#education").style.display = '';
      } else {
        document.querySelector("#education").style.display = 'none';
      }
      break;

    case 'check2':
      var c = document.querySelector("#check2").checked;
      if (c == true) {
        document.querySelector("#Experience").style.display = '';
      } else {
        document.querySelector("#Experience").style.display = 'none';
      }
      break;

    case 'check3':
      var c = document.querySelector("#check3").checked;
      if (c == true) {
        document.querySelector("#Publications").style.display = '';
      } else {
        document.querySelector("#Publications").style.display = 'none';
      }
      break;

    case 'check4':
      var c = document.querySelector("#check4").checked;
      if (c == true) {
        document.querySelector("#Projects").style.display = '';
      } else {
        document.querySelector("#Projects").style.display = 'none';
      }
      break;

    case 'check5':
      var c = document.querySelector("#check5").checked;
      if (c == true) {
        document.querySelector("#Technical").style.display = '';
      } else {
        document.querySelector("#Technical").style.display = 'none';
      }
      break;

    case 'check6':
      var c = document.querySelector("#check6").checked;
      if (c == true) {
        document.querySelector("#position").style.display = '';
      } else {
        document.querySelector("#position").style.display = 'none';
      }
      break;

    case 'check7':
      var c = document.querySelector("#check7").checked;
      if (c == true) {
        document.querySelector("#Achievements").style.display = '';
      } else {
        document.querySelector("#Achievements").style.display = 'none';
      }
      break;







  }
}
