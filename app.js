const searchFood = () =>{
    const searchFood = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals));
    displayFood.innerHTML="";
}

const displayFood = meals =>{
    const foodContainer = document.getElementById('food-container');
    meals.forEach(meal => {
        const foodDiv = document.createElement('div');
        foodDiv.className='food-img';
        foodDiv.innerHTML= `
        <img onclick="displayFoodDEtails('${meal.strMeal}')" src="${meal.strMealThumb}">
        <h5 style="color:salmon">${meal.strMeal}</h5>
        `;
        foodContainer.appendChild(foodDiv);
        
        
   
    });
}

const displayFoodDEtails = name=>{
    // const url=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
    .then(res => res.json())
    .then(data=>{
       
    })
   
}