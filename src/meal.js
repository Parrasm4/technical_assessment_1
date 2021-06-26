/* 1
----Write a function called nameMenuItem that takes in any ONE item
----and returns a string with the word "Delicious" in front of the item name
----Example: nameMenuItem("Pizza") -> "Delicous Pizza"
----Example: nameMenuItem("Tacos") -> "Delicous Tacos"
*/

function nameMenuItem(item) {
    // Please write your code here
    return "Delicious " + item;
}





/* 2
----Write a function called createMeuItem that creates and return an object with the new item name, price and a type
----Your function should return an object with the keys of 'name', 'price' and 'type'
----Example: createMenuItem("Cheesecake", 7.50, "Pastry") : createMenuItem.name -> "Cheesecake", createMenuItem.price -> 7.50, createMenuItem.type -> "Pastry"
*/
function createMenuItem(cheesecake, cakePrice, cakeType){
    // Please write your code here
    var menuItem = {
    name: cheesecake,
    price: cakePrice,
    type:cakeType
    }
    return menuItem;
}





/* 3
----Write a function called addIngridients that takes in the name of
----the ingredient and an array. Your function should add the ingredient to the ingriedientArray if it does not already exist.
----Please be sure to not let the same ingredient be added on twice.
----addIngredients("Flour", ["Water", "Butter"]) -> ["Water", "Butter", "Flour"];
----addIngredients("Water", ["Water", "Butter"]) -> ["Water", "Butter"];
*/
function addIngredients(ingredient, ingredientArray) {
    // Please write your code here
    //If ingredient doesn't exist in array list, add to array
    
}



/* 4
----Write a function called formatPrice that takes in a price
----and returns a '$' in front of the price passed in
----formatPrice(23.12) -> $23.12;
*/
function formatPrice(price){
    // Please write your code here
    return "$" + price;
}









/* 5
----Write a function called decreasePrice that takes in a price
----and returns a price with a 10% reduction
----descreasePrice(100.00) -> 90.00
*/
function decreasePrice(price){
    // Please write your code here
    return price - (price * .1);
}







/* 6
----Write a function called createRecipe that takes in a recipeTitle, recipeIngredients, and a menuType
----your function should create and return a recipe object with the following keys
----'title', 'ingredients', and 'type'
----createRecipe("Delicious Grilled Cheese", ["bread", "cheese", "butter"], "lunch");  recipe.title -> "Delicious Grilled Cheese"; recipe.recipeIngredients -> ["bread", "cheese", "butter"]; recipe.menuType -> "lunch";
*/
function createRecipe(recipeTitle, recipeIngredients, menuType) {
    // Please write your code here
    var newRecipe = {
        title: recipeTitle,
        ingredients: recipeIngredients,
        type: menuType
    }
    return newRecipe;
}
