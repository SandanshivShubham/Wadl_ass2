function button() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      alert(xhttp.responseText)
  }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}