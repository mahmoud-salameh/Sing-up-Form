let data_user = {
  firstname: "",
  lastname: "",
  email: "",
  address: 0,
  city: "",
  country: "",
  pincode: [],
  course: "",
};

function random() {
  document.getElementById("form").reset();

  var x = document.getElementById("input").value;
  if (x === "Jordan") {
    var arr = ["Amman", "Zarqa", "Madaba"];
  } else if (x === "Saudi Arabia") {
    var arr = ["Riyadh", "Jeddah", "Medina"];
  } else if (x === "Turkey") {
    var arr = ["Istanbul", "Antalya", "Ankara"];
  } else {
    var arr = [];
  }
  var string = "";
  for (i = 0; i < arr.length; i++) {
    string = string + "<Option>" + arr[i] + "</Option>";
  }

  string = "<select name = 'lol'>" + string + "<select>";
  document.getElementById("output").innerHTML = string;
}
