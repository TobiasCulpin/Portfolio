//Getting all the button divs under the filters id
var filters = document.getElementById("filters").querySelectorAll("button")

//Generating a map of bools for each filter element to keep track of which are active
//All are on by default
//At the same time this adds onclick events to all the filter buttons
var filterStatus = []
for (let i = 0; i < filters.length; i++)
{
    filterStatus[filters[i].classList] = true
    filters[i].onclick = function(){ toggle(filters[i]) }
}

//To be called on a button click
//Inverts the status bool value and does stuff to the element given
function toggle(elem)
{
    if (filterStatus[elem.classList])
    {
        elem.innerHTML = "Off"
        filterStatus[elem.classList] = false
    }
    else
    {
        elem.innerHTML = "On"
        filterStatus[elem.classList] = true
    }
}