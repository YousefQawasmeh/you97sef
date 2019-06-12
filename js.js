var x = 0;
var y = 0;
var str = "";
var op = "";
var input = document.getElementById("inputText");
var buttons = document.querySelectorAll(".bu");
for (var i = 0; i < buttons.length; ++i) {

    buttons[i].addEventListener("click", function(event) {
        input.value = input.value + event.srcElement.defaultValue;
    });

}

var inputText = (document.getElementById("inputText").value);
var hist = (document.getElementById("hist"));


document.getElementById("pl").addEventListener("click", function(event) {
    document.getElementById("dot").disabled = false;
});
document.getElementById("m").addEventListener("click", function(event) {
    document.getElementById("dot").disabled = false;
});
document.getElementById("mu").addEventListener("click", function(event) {
    document.getElementById("dot").disabled = false;
});
document.getElementById("div").addEventListener("click", function(event) {
    document.getElementById("dot").disabled = false;


});
document.getElementById("dot").addEventListener("click", function(event) {
    document.getElementById("dot").disabled = true;

});
document.getElementById("ac").addEventListener("click", function(event) {
    document.getElementById("dot").disabled = false;
    input.value = "";
    input.placeholder = "0";

});
document.getElementById("ba").addEventListener("click", function(event) {
    var valu = input.value;
    if (valu.length > 0) {
        valu = valu.slice(0, valu.length - 1);
        input.value = valu;
    }
});
document.getElementById("e").addEventListener("click", function(event) {
    try {
        hist.innerText += "\n" + input.value + "=";

        document.getElementById("dot").disabled = false;
        var res = eval(input.value);
    } catch (err) {
        input.placeholder = "Error";
        input.value = "";
    }
    input.value = res;
    if (res == "Infinity") {
        res = "لا يمكن القسمة على صفر";
        input.placeholder = res;
        input.value = "";
    }
    if (input.value == "undefined") {
        res = "Error";
        input.placeholder = res;
        input.value = "";
    }
    hist.innerText += input.value;

    str = str + inputText;
    y = Number(str);

    str = "";
    op = "";
    x = 0;
    y = 0;
});