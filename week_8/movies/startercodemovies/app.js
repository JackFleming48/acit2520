// Add DOM selectors to target input and UL movie list
let inp = document.querySelector("input");
let myMovieList = document.querySelector("ul");

window.onload = function() {
  let parent = document.getElementById("movieHistoryCard");
  if (!document.getElementById("movieTable")){
    let table = document.createElement("table");
    table.id = "movieTable";
    let tr = document.createElement("tr");
    let movieth = document.createElement("th");
    movieth.textContent = "Movie";
    let watchedth = document.createElement("th")
    watchedth.textContent = "Watched";
    tr.appendChild(movieth);
    tr.appendChild(watchedth);
    table.appendChild(tr);

    parent.appendChild(table);
  }
}

// Example of a simple function that clears the input after a user types something in
function clearInput() {
  inp.value = "";
}

function clearMovies() {
  // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
  myMovieList.innerHTML = "";
}

// This function is executed when the user clicks [ADD MOVIE] button.
function addMovie() {
  // Step 1: Get value of input
  let userTypedText = inp.value;
  // Step 2: Create an empty <li></li>
  if (!userTypedText) {
    alert("Cannot submit this field with no text.")
  } else {



    let li = document.createElement("li"); // <li></li>
  
    // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
    let textToInsert = document.createTextNode(userTypedText);
    
    // Step 4: Insert text into li
    // <li>Harry Potter </li>
    li.appendChild(textToInsert);
  
    // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
    myMovieList.appendChild(li);
    
    // Step 6: Call the clearInput function to clear the input field
    clearInput();
  }
}


/*
Armaan's Tips:
- Local storage is a mini-DB in your browser
- You can store whatever you want inside of localstorage
- Whatever data you store must be a string
- You have to be able to serialize* whatever you want to store
in local storage as a string


*It means you can take the data structure and run it through
a funtion to get a string and another function that
deserializes.

**In this case it must be a DOM node.

***Probably want to use JSON with stringify and dump it to
localstorage and get it back with JSON.parse



*/