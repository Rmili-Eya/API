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
async function fetchApi(){
    const url=`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_Id}&app_key=${APP_KEY}`;
const response = await fetch(url);
const data=await response.json();
generateHTML(data.hits);//function on va lui passer des données (c'est pa tous les données mais just les données  du hits Array)
console.log(data);
}
function generateHTML(results){
let generatedHTML='';
    results.map(result =>{//on va mapper (loop)le resultat et pour chaque resultat on va créer html item 
   generatedHTML +=
   `

  <div class="card" style="width: 18rem;">
  <img src="${result.recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result.recipe.label}</h5>
    <p class="card-text">calories:${result.recipe.calories.toFixed(2)}</p>
    <a href="#" class="btn btn-primary">${result.recipe.url}</a>
  </div>
</div>
   `
    })
    SearchResultDiv.innerHTML = generatedHTML;
}