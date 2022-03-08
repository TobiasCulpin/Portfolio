//Getting all the button divs under the filters id
var filters = document.getElementById("filters").querySelectorAll("button")
//Getting all the project divs under the projects id
var projects = document.getElementById("projects").querySelectorAll("div")
document.writeln()

//Generating a map of bools for each filter element to keep track of which are active
//All are off by default - BUT when all filters are off all the projects are shown
//This is a similar system to comparable web design
var filterStatus = []
for (let i = 0; i < filters.length; i++)
{
    filterStatus[filters[i].classList] = false
    filters[i].onclick = function(){ toggle(filters[i]) }//Adds onclick events to all the filter buttons
}

//To be called on a button click
//Inverts the status bool value and does stuff to the element given
function toggle(elem)
{
    if (filterStatus[elem.classList])
    {
        elem.style.background = "lightBlue"
        filterStatus[elem.classList] = false
    }
    else
    {
        elem.style.background = "blue"
        filterStatus[elem.classList] = true
    }
    updateProjects()
}

//shows all the projects
function showAll()
{
    for (let i = 0; i < projects.length; i++) { projects[i].style.display = "block" }
}

//hides all the projects
function hideAll()
{
    for (let i = 0; i < projects.length; i++) { projects[i].style.display = "none" }
}


//To be called after a filter button is pressed.  Updates which projects should be shown
function updateProjects()
{
    //if show all filter is on then we show all projects and exit function
    //showAllFilter = document.getElementById("all")

    //If all filters are off all the projects are shown
    let allFalse = true;
    for (let i = 0; i < filters.length; i++)
    {
        if (filterStatus[filters[i].classList]) { allFalse = false }
    }
    if (allFalse)
    {
        showAll()
        return
    }

    //Hide the projects at the start and then show if a filter match is made
    hideAll()

    for (let i = 0; i < filters.length; i++)
    {
        if (filterStatus[filters[i].classList])
        {
            for (let j = 0; j < projects.length; j++)
            {
                //.indexOf returns -1 if the substring cannot be found
                //using .indexOf instead of .includes to support Internet Explorer and other old browsers
                if ((projects[j].className).indexOf(filters[i].className) !== -1)
                {
                    //show project
                    projects[j].style.display = "block"
                }
            }
        }
    }
}