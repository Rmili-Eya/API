const searchForm=document.querySelector('form');
const SearchResultDiv=document.querySelector('.serach-result');
const container=document.querySelector('.container');
let searchQuery='';
const APP_Id='dcefc7e9';
const APP_KEY='f5bfa6c18aabbdf53181e4848f316547';
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery)

})