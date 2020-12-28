function calc() {
    var count = parseInt(document.getElementById('count').value);
    var select = document.getElementById("type-calc");
    var value = select.options[select.selectedIndex].value;
    var result = 0;

    if (value == "День"){
        result = count * parseInt(document.getElementsByClassName('costday')[0].innerHTML);
    }else if("Месяц"){
        result = count * parseInt(document.getElementsByClassName('costmonth')[0].innerHTML);
    }

    document.getElementById('final_price').innerHTML = result;
}