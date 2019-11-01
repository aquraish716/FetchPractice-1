
let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=498ef46583624911a1865c77beac62ad";


async function getUsers() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.articles);
    let numberOfArticles = document.getElementById("numberOfArticles").value;
    for(let i = 0;i < numberOfArticles; i++){
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let para = document.createElement("p");
    let authorOfArticles = JSON.stringify(data.articles[i].author).replace(/[^a-zA-Z0-9:']/g, ' ');  
    let titleOfArticles = JSON.stringify(data.articles[i].title).replace(/[^a-zA-Z0-9:']/g, ' ');  
    let contentOfArticles = JSON.stringify(data.articles[i].description).replace(/[^a-zA-Z0-9:']/g, ' ');  
    //console.log(stringOfArticles);
    let news = document.getElementById("news");
    h2.innerText = titleOfArticles;
    h3.innerText = `Written By: ${authorOfArticles}`;
    para.innerText = contentOfArticles;

    //console.log(stringOfArticles);
    let button = document.getElementById("button");
    li.appendChild(h2);
    li.appendChild(h3);
    li.appendChild(para);
    news.appendChild(li);
    
    }}