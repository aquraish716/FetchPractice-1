// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getUsers();
window.onload = function() {
    getUsers();
}
/* this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), 
saved here as res. The res.json will not be saved as posts and saved into the variable, returnResults*/
let getUsers = function() {
    fetch("https://randomuser.me/api?results=12")
        .then(function(res) {
            //console.log("Processing result of api fetch call", res)
            return res.json()})
        .then(function (returnResults) {
            //console.log("returnResults", returnResults)
            //console.log(returnResults.results)
            returnResults.results.forEach(function(user, index){
            
            let listItem = document.createElement("li");
            let img = document.createElement("img");
            let para = document.createElement("p");
            let unorderedList = document.getElementById("listOfUsers");
            img.setAttribute("src", user.picture.large);
            para.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
            let button = document.createElement("button");
            button.innerText = "Show employee cell number";
            button.setAttribute("data-cell", user.cell);
            listItem.appendChild(img);
            listItem.appendChild(para);
            listItem.appendChild(button);
            button.addEventListener("click", showCellNumber = function(event){
                let buttonClick = event.target;
                //console.log("the user clicked", buttonClick);
                let cellNumber = buttonClick.getAttribute('data-cell');
                //console.log("the cell number is: ", cellNumber);
                let clickedUser = buttonClick.parentElement;
                let cellPara = document.createElement("p");
                cellPara.innerText = cellNumber;
                clickedUser.appendChild(cellPara);
                clickedUser.removeChild(buttonClick);
            });

            unorderedList.appendChild(listItem);
                });
});
}


/*
1. See your plain html page
2. Set up onload method
3. Make a call to the randomuser API
4. Print users to the console
5. Update the DOM with the list of users
*/
