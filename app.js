function hasnumber(x){
    return /\d/.test(x);
}

function apply(){
    var na = document.getElementById("name").value;
    var pn = document.getElementById("phone").value;
    var ntxt = document.getElementById("notiftext");
    var ni = document.getElementById("notifi");
    var notif = document.getElementById("notif");
    if (hasnumber(na)){
         ntxt.textContent = "Invalid name";
         ni.className = "fa-solid fa-circle-exclamation";
         ni.style.color="red";
         notif.style.transform ="translate(0px,0px)";
         setTimeout(function() {
         notif.style.transform = "translate(0px,-300px)";
       }, 2000);
       return 0;
    }
    if (isNaN(pn)||(pn.length<8)){
        ntxt.textContent = "Invalid Phone number";
        ni.className = "fa-solid fa-circle-exclamation";
        ni.style.color="red";
        notif.style.transform ="translate(0px,0px)";
        setTimeout(function() {
        notif.style.transform = "translate(0px,-300px)";
      }, 2000);
    }

    if (pn==""||na==""){
        ntxt.textContent = "Empty field(s)";
        ni.className = "fa-solid fa-circle-exclamation";
        ni.style.color="red";
        notif.style.transform ="translate(0px,0px)";
        setTimeout(function() {
        notif.style.transform = "translate(0px,-300px)";
      }, 2000);
    }

    if ((!(isNaN(pn))||(hasnumber(na)))&&(na!="")&&(pn!="")){
        ntxt.textContent = "Request sent";
        ni.className = "fa-regular fa-circle-check";
        ni.style.color ="rgb(6, 158, 228)";
        notif.style.transform ="translate(0px,0px)";
        setTimeout(function() {
        notif.style.transform = "translate(0px,-300px)";
      }, 2000);}
}





function openM () {
  var modal = document.getElementById("Modal");
  modal.style.transform = "translate(0px,0px)";
}

function closeM () {
  var modal = document.getElementById("Modal");
  modal.style.transform = "translate(0px,-1000px)";
}

window.onclick = function(event) {
  var modal = document.getElementById("Modal");
  if (event.target == modal) {
    modal.style.transform = "translate(0px,-1000px)";
  }
}
