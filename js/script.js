/* Hidden list functions */
function hiddenList() {
  var x = document.getElementById("hidden-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hiddenList2() {
  var x = document.getElementById("hidden-list2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
