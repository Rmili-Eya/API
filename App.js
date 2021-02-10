const searchForm=document.querySelector('form');
const SearchResultDiv=document.querySelector('.serach-result');
const container=document.querySelector('.container');
let searchQuery='';
const APP_Id='dcefc7e9';
const APP_KEY='f5bfa6c18aabbdf53181e4848f316547';
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
fetchApi();
});
function fetchApi(){
    const url=`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_Id}&app_key=${APP_KEY}`;
fetch(url).then((response) =>
response.json().then((data)=>{
    console.log(data);
    generateHTML(data.hits);

}))
}
function generateHTML(results){
let generatedHTML='';
    results.map(result =>{//on va mapper (loop)le resultat et pour chaque resultat on va créer html item 
   generatedHTML +=
   `
   <div class="item">
                     <img src="${result.recipe.image}" alt="">
                     <div class="flex-container">
                         <h1 class="title">${result.recipe.label}</h1>
                         <a class="view-button" href="${result.recipe.url}">View Recipe</a>
                     </div>
                     <p class="item-data">calories:${result.recipe.calories.toFixed(2)}</p>
                 </div>


  
   `
    })
    SearchResultDiv.innerHTML = generatedHTML;
}
/*<div class="card" style="width: 18rem;">
  <img src="${result.recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result.recipe.label}</h5>
    <p class="card-text">calories:${result.recipe.calories.toFixed(2)}</p>
    <a href="#" class="btn btn-primary">${result.recipe.url}</a>
  </div>
</div>*/