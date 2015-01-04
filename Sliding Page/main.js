$(document).ready(main);

var cSearchArea = $(".searchArea");
var cButton = $(".button");
var bSearchTrigger = false;

function main()
{
    cButton3.click(slideRight);
    cButton4.click(slideLeft);
}

var cPageOne = $(".pageOne");
var cPageTwo = $(".pageTwo");
var cButton3 = $(".smartButton3");
var cButton4 = $(".smartButton4");
var bLeftOn = false;
var bRightOn = false;


function slideRight() {
    cPageOne.animate(
        { marginLeft: "0" },
        300
        )
    if (bRightOn == false) {
        slideLeftBack();
        bRightOn = true;
    }
}

function slideLeftBack() {
    cPageTwo.animate(
        { marginLeft: "100%" },
        300
        )
    bLeftOn = false;
}

function slideLeft() {
    cPageTwo.animate(
        { marginLeft: "0" },
        300
        )
    if (bLeftOn == false) {
        slideRightBack();
        bLeftOn = true;
    }
}

function slideRightBack() {
    cPageOne.animate(
        { marginLeft: "-100%" },
        300
        )
    bRightOn = false;
}