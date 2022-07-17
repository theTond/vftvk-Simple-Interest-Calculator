function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  var interest = (principal * years * rate) / 100;

  var year = new Date().getFullYear() + parseInt(years);

  if (principal < 1) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    document.getElementById("result").innerHTML =
      "If you deposit <span class='yellow'>" +
      principal +
      "</span>,<br>at an interest rate of <span class='yellow'>" +
      rate +
      "%</span><br>You will receive an amount of <span class='yellow'>" +
      interest +
      "</span>,<br>in the year <span class='yellow'>" +
      year +
      "</span><br>";
  }
}

function alertMessage() {
  var principalNum = document.getElementById("principal").value;

  if (principalNum < 1) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  }
}

function updateRate() {
  if (document.getElementById("principal").value.length != 0) {
    var rateval = document.getElementById("rate").value + "%";
    document.getElementById("rate_val").innerText = rateval;
  } else {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  }
}
