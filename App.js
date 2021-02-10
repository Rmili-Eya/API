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
                     <img src="${result.recipe.image}" class="text-center" alt="">
                     <div class="flex-container text-center">
                         <h1 class="title text-center">${result.recipe.label}</h1>
                         <a class="view-button" href="${result.recipe.url}">View Recipe</a>
                     </div>
                    
                 </div>


  
   `
    })
    SearchResultDiv.innerHTML = generatedHTML;
}
