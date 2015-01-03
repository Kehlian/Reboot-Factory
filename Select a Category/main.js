$(document).ready(main);

var upButton = $(".selectUp");
var downButton = $(".selectDown");
var groups = $(".allGroups");
var iMoveIndex = 1;
var iNumberOfGroups = 8; 
function main()
{
    upButton.click(animateUp);
    downButton.click(animateDown);
}

function animateDown()
{
    if (iMoveIndex <= iNumberOfGroups - 3)//Number of groups minus the number of group displayed
    {
        groups.animate(
            { marginTop: "-=52px" },
            200
            );
        iMoveIndex += 1;
    }
    console.log(iMoveIndex);
}

function animateUp()
{
    if (iMoveIndex >= iNumberOfGroups-6)//Number of groups minus the number of group gone through
    {
        groups.animate(
            { marginTop: "+=52px" },
            200
            );
        iMoveIndex -= 1;
    }
}