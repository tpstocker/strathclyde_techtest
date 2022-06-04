var infoContainer = document.getElementById("info");
var btn = document.getElementById("btn");

function textSearch() {
  textInput = document.getElementById("myText").value;
  textInput = textInput.replace(" ", "+");
  console.log("search text" + textInput);
}

function searchType() {
  searchTypeInput = document.getElementById("searchTypeInput").value;
  console.log(searchTypeInput);
}

if (typeof textInput === "string" && searchTypeInput === "title") {
  btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open(
      "GET",
      "http://openlibrary.org/search.json?q=" + textInput + "&page=1&limit=10"
    );
    ourRequest.onload = function () {
      var ourData = JSON.parse(ourRequest.responseText);
      console.log(ourData.docs);

      renderHTML(ourData.docs);
    };
    ourRequest.send();
  });
} else {
  btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open(
      "GET",
      "https://openlibrary.org/api/books?bibkeys=ISBN:" +
        searchTypeInput +
        "&jscmd=data&format=json"
    );
    ourRequest.onload = function () {
      var ourData = JSON.parse(ourRequest.responseText);
      console.log(ourData.docs);

      renderHTML(ourData.docs);
    };
    ourRequest.send();
  });
}

function renderHTML(data) {
  var htmlString = data;
  infoContainer.insertAdjacentHTML("beforeend", htmlString);
}
