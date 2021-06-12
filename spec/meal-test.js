(function() {
  'use strict';

describe("Part 1: meal.js", function() {
  describe("nameMenuItem", function() {
    it("should be a function", function() {
     expect(nameMenuItem).to.be.a('function');
    });

    it('should take in a name and make "Delicious [name]"', function () {
      var menuItemName = nameMenuItem("Pizza");
      expect(menuItemName).to.equal("Delicious Pizza");
    });

    it("should be able to create many delicious titles", function () {
      var burritoItem = nameMenuItem("Burrito");
      var sushiItem = nameMenuItem("Pizza");
      var tacoItem = nameMenuItem("Taco");

      expect(burritoItem).to.equal("Delicious Burrito");
      expect(sushiItem).to.equal("Delicious Pizza");
      expect(tacoItem).to.equal("Delicious Taco");
    });
  });

  describe("createMenuItem", function() {
    it("should be a function", function () {
      expect(createMenuItem).to.be.a('function');
    });

    it("should create a menu item object", function() {
      var menuItemName = nameMenuItem("French Toast");
      var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");

      expect(menuItem.name).to.equal("Delicious French Toast");
      expect(menuItem.price).to.equal(10.99);
      expect(menuItem.type).to.equal("breakfast");
    });
  });

  describe("addIngredients", function() {
    it("should be a function", function () {
      expect(addIngredients).to.be.a('function');
    });

    it("should be able to add ingredients to an existing array", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);

      expect(ingredients.length).to.equal(1);
      expect(ingredients).to.deep.equal(["cheese"]);
    });

    it("should be able to add ingredients to an array that already contains ingredients", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);
      addIngredients("peppers", ingredients);
      addIngredients("onion", ingredients);

      expect(ingredients.length).to.equal(3);
      expect(ingredients).to.deep.equal(["cheese", "peppers", "onion"]);
    });

    it("should only add unique ingredients", function() {
      var ingredients = [];

      addIngredients("cheese", ingredients);
      addIngredients("peppers", ingredients);
      addIngredients("peppers", ingredients);

      expect(ingredients.length).to.equal(2);
      expect(ingredients).to.deep.equal(["cheese", "peppers"]);
    })
  })

  describe("formatPrice", function() {
    it("should be a function", function () {
      expect(formatPrice).to.be.a('function');
    });

    it("should add a dollar sign in front of the price", function () {
      var menuItemName = nameMenuItem("French Toast");
      var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");
      var initialPrice = menuItem.price;

      var formattedPrice = formatPrice(initialPrice);
      expect(formattedPrice).to.equal("$10.99");
    });

    it("should add a dollar sign in front of a different price", function () {
      var menuItemName = nameMenuItem("Carrot Cake");
      var menuItem = createMenuItem(menuItemName, 5.99, "dessert");
      var initialPrice = menuItem.price;

      var formattedPrice = formatPrice(initialPrice);
      expect(formattedPrice).to.equal("$5.99");
    });
  });

  describe("decreasePrice", function() {
    it("should be a function", function () {
      expect(decreasePrice).to.be.a('function');
    });

    it("should decrease the price by 10%", function() {
      var menuItemName = nameMenuItem("Fajitas");
      var menuItem = createMenuItem(menuItemName, 6.00, "dessert");
      var decreasedPrice = decreasePrice(menuItem.price);

      expect(decreasedPrice).to.equal(5.40);
    })
  })

  describe("createRecipe", function() {
    it("should be a function", function () {
      expect(createRecipe).to.be.a('function');
    });

    it("should return a recipe object", function() {
      var ingredients = [];
      addIngredients("eggs", ingredients);
      addIngredients("bacon", ingredients);

      var title = nameMenuItem("Eggs & Bacon");
      var price = formatPrice("10.85")
      var menuItem = createMenuItem(title, price, "breakfast");
      var menuItemType = menuItem.type;

      var recipe = createRecipe(title, ingredients, menuItemType);
      expect(recipe.title).to.equal("Delicious Eggs & Bacon");
      expect(recipe.ingredients).to.deep.equal(["eggs", "bacon"]);
      expect(recipe.type).to.equal("breakfast");
    });


    it("should return a different recipe object", function () {
      var ingredients = [];
      addIngredients("bread", ingredients);
      addIngredients("cheese", ingredients);
      addIngredients("butter", ingredients);

      var title = nameMenuItem("Grilled Cheese");
      var price = formatPrice("4.99")
      var menuItem = createMenuItem(title, price, "lunch");
      var menuItemType = menuItem.type;

      var recipe = createRecipe(title, ingredients, menuItemType);
      expect(recipe.title).to.equal("Delicious Grilled Cheese");
      expect(recipe.ingredients).to.deep.equal(["bread", "cheese", "butter"]);
      expect(recipe.type).to.equal("lunch");
    });
  });
});

}());