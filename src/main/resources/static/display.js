const displayList = document.getElementById("display-list");





let counter = -1;

let data = [];



function loadContent() {
    fetch("/all")
        .then((data) => data.json())
        .then((json) => {
            data = json;
            loadNextOrPreviousContent("next")}
   )
            
                
            
}

function loadNextOrPreviousContent(direction) {
    
    if (counter < data.length && data.length != 0 && direction == "next") {
        counter++;
        displayList.innerHTML = `<div id="registration-box" >
        <div class="profile-foto">
            <input id="profile-button" style="display: none;" type="file"><img class="profile-upload" src="https://img.icons8.com/color/48/000000/add--v1.png"/>
        </div>
        <h2 class="detail-header">Student information</h2>
        <p style="color: teal;">Please provide the following information.</p>
        <form  action="" id="registration-form">
            <p class="input-fields">
                Name: <input class="fields" disabled="disabled" type="text" value="${data[counter].name}">
            </p>
            <p class="input-fields">
            Guardian name: <input class="fields" disabled="disabled" type="text" value="${data[counter].guardianName}">
            </p>
            <p class="input-fields">
            Roll no.: <input class="fields" disabled="disabled" type="number" value="${data[counter].rollNo}">
            </p>
            <p class="input-fields">
            Age: <input class="fields" disabled="disabled" type="number" min="0" value="${data[counter].age}">
            </p>
            <p class="input-fields">
            Phone: <input class="fields" disabled="disabled" type="tel" value="${data[counter].telephone}">
            </p>
            <p class="input-fields">
            Notes: <input class="fields" disabled="disabled" type="text">
            </p>
            <div class="input-fields">
            <button class="fields" onclick="loadNextOrPreviousContent('previous')" type="button" >Previous</button>
            </div>
            <div class="input-fields">
            <button class="fields" onclick="loadNextOrPreviousContent('next')" type="button">Next</button>
            </div>
            
        </form>
    </div>`
        
    } else if (counter > 0 && direction == "previous") {
        counter--;    
        displayList.innerHTML = `<div id="registration-box" >
        <div class="profile-foto">
            <input id="profile-button" style="display: none;" type="file"><img class="profile-upload" src="https://img.icons8.com/color/48/000000/add--v1.png"/>
        </div>
        <h2 class="detail-header">Student information</h2>
        <p style="color: teal;">Please provide the following information.</p>
        <form  action="" id="registration-form">
            <p class="input-fields">
                Name: <input class="fields" disabled="disabled" type="text" value="${data[counter].name}">
            </p>
            <p class="input-fields">
            Guardian name: <input class="fields" disabled="disabled" type="text" value="${data[counter].guardianName}">
            </p>
            <p class="input-fields">
            Roll no.: <input class="fields" disabled="disabled" type="number" value="${data[counter].rollNo}">
            </p>
            <p class="input-fields">
            Age: <input class="fields" disabled="disabled" type="number" min="0" value="${data[counter].age}">
            </p>
            <p class="input-fields">
            Phone: <input class="fields" disabled="disabled" type="tel" value="${data[counter].telephone}">
            </p>
            <p class="input-fields">
            Notes: <input class="fields" disabled="disabled" type="text">
            </p>
            <div class="input-fields">
            <button class="fields" onclick="loadNextOrPreviousContent('previous')" type="button" >Previous</button>
            </div>
            <div class="input-fields">
            <button class="fields" onclick="loadNextOrPreviousContent('next')" type="button">Next</button>
            </div>
            
        </form>
    </div>`
    }
    
}


window.onload = loadContent;









