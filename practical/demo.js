var infoContainer = document.getElementById("info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "GET",
    "http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=1&limit=10"
  );
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData.docs);
    renderHTML(ourData.docs);
  };
  ourRequest.send();
});

function renderHTML(data) {
  var htmlString = data;
  infoContainer.insertAdjacentHTML("beforeend", htmlString);
}
