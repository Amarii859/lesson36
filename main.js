$(window).ready(function(){
    alert("hello")
});


var header = document.getElementById("header")

console.log($("#header"))
console.log($("li"))
console.log($("ul li"))
console.log($(".student"))

$('a.test:first'); //first anchor (link) element with test class
$('tr:odd'); //select all odd rows from a tabel
$('#myForm :input');//select all input-like elements in a form
$('div:visible'); //select only visible divs
$('div:gt(2)'); //select all except the firs three divs
$('div:animated'); //all currently animated divs

$('li').click(function(){
    console.log('clicked')
    $(".rrethi").hide();
});


$('li').keydown(function(){
    console.log('keydown')
});
$('li').keypress(function(){
    console.log('keypress')
});
$('li').keyup(function(){
    console.log('keyup')
});

$('#btn').click(function(){
    console.log($('#h1').text())
    $('#h1').text("testin text")
    $('#h1').append("extra text")
})

$('#btn').on("click" , function(){
    console.log(123)
} )

$('button')
    .click(function(){
    $(this).addClass("click");
    $(".rrethi").show("slow");

})






