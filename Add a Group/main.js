$(document).ready(main);

var cButton = $(".button");
var cGroup = $(".groupA");
var cGroup2 = $(".groupB");
var iGroupIndex = 0;

function main()
{
    cButton.click(animationGroups);
}

function animationGroups()
{
    if (iGroupIndex == 0) {
        cGroup.animate(
            { marginLeft: "0" },
            300
            )
        iGroupIndex += 1;
    }
    else if (iGroupIndex == 1) {
        cGroup2.animate(
            { marginLeft: "0" },
            300
            )
        iGroupIndex += 1;
        cGroup.animate(
            { marginTop: "15%" },
            300
            )
    }
}