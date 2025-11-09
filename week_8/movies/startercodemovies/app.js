// Add DOM selectors to target input and UL movie list
let inp = document.querySelector("input");
let myMovieList = document.querySelector("ul");
const store = localStorage.getItem("movieHistory");

let d = {}
let li_d = {}

// addevent listener for filtering
document.getElementById("filter").addEventListener("input", function(event) {
  let val = event.target.value.toLowerCase();
  for (let movie in li_d) {
    const li = li_d[movie];

    if (val === "") {
      li.style.display = "list-item";
      continue;
    }

    if (movie.includes(val)) {
      li.style.display = "list-item"
    } else {
      li.style.display = "none";
    }
  }  
}); 

window.onload = () => {
    let parent = document.getElementById("movieHistoryCard");
    let table = document.createElement("table");
    table.id = "movieHistory";
    table.style.width = "80%";
    let tableTitle = document.createElement("h4");
    tableTitle.textContent = "Movie History";
    let tableHead = document.createElement("tr");
    let movieth = document.createElement("th");
    let watchedth = document.createElement("th");
    watchedth.style.textAlign = "right";
    watchedth.style.alignSelf = "flex-end"
    movieth.textContent = "Movie";
    watchedth.textContent = "Watched";
    tableHead.appendChild(movieth);
    tableHead.appendChild(watchedth);
    table.appendChild(tableTitle);
    table.appendChild(tableHead);
    parent.appendChild(table);
    
    if (store) {
      d = JSON.parse(store);
      for (let movie in d) {
        addMovieRow(movie, d[movie]);
        addList(movie);
      }

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

function addMovieRow(movie, count) {
  let table = document.getElementById("movieHistory");
  let tableInfo = document.createElement("tr");
  let movietd = document.createElement("td");
  let watchedtd = document.createElement("td");
  watchedtd.id = movie
  movietd.textContent = movie
  watchedtd.textContent = count
  tableInfo.appendChild(movietd);
  tableInfo.appendChild(watchedtd);
  table.appendChild(tableInfo);
}

function addList(movie) {
  let li = document.createElement("li");
  li.textContent = movie;
  myMovieList.appendChild(li);
  li_d[movie] = li;
}

// This function is executed when the user clicks [ADD MOVIE] button.
function addMovie() {
    // Step 1: Get value of input
    let userTyped = inp.value;
    let userTypedText = userTyped.toLowerCase().trim();
    if (!userTypedText) {
      alert("Cannot submit this field with no text.")
    } else if (!d[userTypedText]) {
      d[userTypedText] = 1;
      // Step 2: Create an empty <li></li>
      let li = document.createElement("li"); // <li></li>
    
      // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
      let textToInsert = document.createTextNode(userTypedText);
      let historyText = document.createTextNode(userTypedText);
      
      // Create elements to insert to movie history
      let table = document.getElementById("movieHistory");
      let tableInfo = document.createElement("tr");
      let movietd = document.createElement("td");
      let watchedtd = document.createElement("td");
      watchedtd.id = userTypedText;
      watchedtd.textContent = d[userTypedText];

      movietd.appendChild(historyText);
      tableInfo.appendChild(movietd);
      tableInfo.appendChild(watchedtd);
      table.appendChild(tableInfo);


      // Step 4: Insert text into li
      // <li>Harry Potter </li>
      li.appendChild(textToInsert)
    
      // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
      myMovieList.appendChild(li);
      li_d[userTypedText] = li;


    } else {
      d[userTypedText] += 1
      let watchedtd = document.getElementById(userTypedText);
      watchedtd.textContent = d[userTypedText];
    }
    localStorage.setItem("movieHistory", JSON.stringify(d));

    // Step 6: Call the clearInput function to clear the input field
    clearInput();
}
