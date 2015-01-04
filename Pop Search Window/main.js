$(document).ready(main);

var cSearchArea = $(".searchArea");
var cButton = $(".button");
var bSearchTrigger = false;

function main()
{
    cButton.click(triggerSearch);
}

function triggerSearch()
{
    cSearchArea.toggle("scale");
}
