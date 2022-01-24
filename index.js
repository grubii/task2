function round(event, string) {
    var array = document.getElementById(string).value.split(",");
    var summ = 0;
    var count = 0;
    array.forEach(element => {
        summ += +element;
        count++;
    });
    var result = Math.floor(summ/count);
    document.getElementById("result").innerHTML = "<b>Result:</b> " + result;
    event.preventDefault();
  }