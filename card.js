// Card1
window.addEventListener("DOMContentLoaded", function () {
  var card1Percentage = localStorage.getItem("card1Percentage");
  if (card1Percentage) {
    document.getElementById("card1Percentage").outerHTML = card1Percentage;
  }
  var placeHolderCard1 = localStorage.getItem("placeHolderCard1");
  if (placeHolderCard1) {
    document.getElementById("card1Limit").placeholder =
      parseInt(placeHolderCard1).toLocaleString("en-US") + " Đ";
  }
  var today = new Date().toISOString().split("T")[0];
  document.getElementById("card1Date").value = today;
});

function updateCard1() {
  var card1Limit = document.getElementById("card1Limit");

  var inputElement = document.getElementById("card1Limit");
  var data = inputElement.value / 55000000;
  localStorage.setItem(
    "card1Percentage",
    "<span id='card1Percentage' style='width:" + data * 100 + "%" + "'></span>"
  );

  document.getElementById("card1Percentage").outerHTML =
    "<span id='card1Percentage' style='width:" + data * 100 + "%" + "'></span>";

  localStorage.setItem(
    "placeHolderCard1",
    document.getElementById("card1Limit").value
  );
}

// Card2
window.addEventListener("DOMContentLoaded", function () {
  var card2Percentage = localStorage.getItem("card2Percentage");
  if (card2Percentage) {
    document.getElementById("card2Percentage").outerHTML = card2Percentage;
  }
  var placeHolderCard2 = localStorage.getItem("placeHolderCard2");
  if (placeHolderCard2) {
    document.getElementById("card2Limit").placeholder =
      parseInt(placeHolderCard2).toLocaleString("en-US") + " Đ";
  }
  var today = new Date().toISOString().split("T")[0];
  document.getElementById("card2Date").value = today;
});

function updateCard2() {
  var card2Limit = document.getElementById("card2Limit");

  var inputElement = document.getElementById("card2Limit");
  var data = inputElement.value / 10000000;
  localStorage.setItem(
    "card2Percentage",
    "<span id='card2Percentage' style='width:" + data * 100 + "%" + "'></span>"
  );

  document.getElementById("card2Percentage").outerHTML =
    "<span id='card2Percentage' style='width:" + data * 100 + "%" + "'></span>";

  localStorage.setItem(
    "placeHolderCard2",
    document.getElementById("card2Limit").value
  );
}
// Card3
window.addEventListener("DOMContentLoaded", function () {
  var card3Percentage = localStorage.getItem("card3Percentage");
  if (card3Percentage) {
    document.getElementById("card3Percentage").outerHTML = card3Percentage;
  }
  var placeHolderCard3 = localStorage.getItem("placeHolderCard3");
  if (placeHolderCard3) {
    document.getElementById("card3Limit").placeholder =
      parseInt(placeHolderCard3).toLocaleString("en-US") + " Đ";
  }
  var today = new Date().toISOString().split("T")[0];
  document.getElementById("card3Date").value = today;
});

function updateCard3() {
  var card3Limit = document.getElementById("card3Limit");

  var inputElement = document.getElementById("card3Limit");
  var data = inputElement.value / 10000000;
  localStorage.setItem(
    "card3Percentage",
    "<span id='card3Percentage' style='width:" + data * 100 + "%" + "'></span>"
  );

  document.getElementById("card3Percentage").outerHTML =
    "<span id='card3Percentage' style='width:" + data * 100 + "%" + "'></span>";

  localStorage.setItem(
    "placeHolderCard3",
    document.getElementById("card3Limit").value
  );
}
// Card4
window.addEventListener("DOMContentLoaded", function () {
  var card4Percentage = localStorage.getItem("card4Percentage");
  if (card4Percentage) {
    document.getElementById("card4Percentage").outerHTML = card4Percentage;
  }
  var placeHolderCard4 = localStorage.getItem("placeHolderCard4");
  if (placeHolderCard4) {
    document.getElementById("card4Limit").placeholder =
      parseInt(placeHolderCard4).toLocaleString("en-US") + " Đ";
  }
  var today = new Date().toISOString().split("T")[0];
  document.getElementById("card4Date").value = today;
});

function updateCard4() {
  var card4Limit = document.getElementById("card4Limit");

  var inputElement = document.getElementById("card4Limit");
  var data = inputElement.value / 10000000;
  localStorage.setItem(
    "card4Percentage",
    "<span id='card4Percentage' style='width:" + data * 100 + "%" + "'></span>"
  );

  document.getElementById("card4Percentage").outerHTML =
    "<span id='card4Percentage' style='width:" + data * 100 + "%" + "'></span>";

  localStorage.setItem(
    "placeHolderCard4",
    document.getElementById("card4Limit").value
  );
}
// Card5
window.addEventListener("DOMContentLoaded", function () {
  var card5Percentage = localStorage.getItem("card5Percentage");
  if (card5Percentage) {
    document.getElementById("card5Percentage").outerHTML = card5Percentage;
  }
  var placeHolderCard5 = localStorage.getItem("placeHolderCard5");
  if (placeHolderCard5) {
    document.getElementById("card5Limit").placeholder =
      parseInt(placeHolderCard5).toLocaleString("en-US") + " Đ";
  }
  var today = new Date().toISOString().split("T")[0];
  document.getElementById("card5Date").value = today;
});

function updateCard5() {
  var card5Limit = document.getElementById("card5Limit");

  var inputElement = document.getElementById("card5Limit");
  var data = inputElement.value / 10000000;
  localStorage.setItem(
    "card5Percentage",
    "<span id='card5Percentage' style='width:" + data * 100 + "%" + "'></span>"
  );

  document.getElementById("card5Percentage").outerHTML =
    "<span id='card5Percentage' style='width:" + data * 100 + "%" + "'></span>";

  localStorage.setItem(
    "placeHolderCard5",
    document.getElementById("card5Limit").value
  );
}
// Card6
window.addEventListener("DOMContentLoaded", function () {
  var card6Percentage = localStorage.getItem("card6Percentage");
  if (card6Percentage) {
    document.getElementById("card6Percentage").outerHTML = card6Percentage;
  }
  var placeHolderCard6 = localStorage.getItem("placeHolderCard6");
  if (placeHolderCard6) {
    document.getElementById("card6Limit").placeholder =
      parseInt(placeHolderCard6).toLocaleString("en-US") + " Đ";
  }
  var today = new Date().toISOString().split("T")[0];
  document.getElementById("card6Date").value = today;
});

function updateCard6() {
  var card6Limit = document.getElementById("card6Limit");

  var inputElement = document.getElementById("card6Limit");
  var data = inputElement.value / 10000000;
  localStorage.setItem(
    "card6Percentage",
    "<span id='card6Percentage' style='width:" + data * 100 + "%" + "'></span>"
  );

  document.getElementById("card6Percentage").outerHTML =
    "<span id='card6Percentage' style='width:" + data * 100 + "%" + "'></span>";

  localStorage.setItem(
    "placeHolderCard6",
    document.getElementById("card6Limit").value
  );
}
