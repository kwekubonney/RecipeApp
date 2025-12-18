const recipes = [
  {
    id: 1,
    name: "Classic Spaghetti Carbonara",
    description: "A traditional Italian pasta dish made with eggs, cheese, pancetta, and black pepper. Creamy and delicious without any cream!",
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "Black pepper to taste",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil and cook spaghetti until al dente.",
      "Meanwhile, cook pancetta in a large pan over medium heat until crispy.",
      "In a bowl, whisk together eggs and grated Pecorino Romano cheese.",
      "Reserve 1 cup of pasta water before draining.",
      "Add hot pasta to the pancetta pan, remove from heat.",
      "Pour egg mixture over pasta and toss quickly, adding pasta water as needed for creamy sauce.",
      "Season with black pepper and serve immediately."
    ],
    cookingTime: 20,
    servings: 4,
    difficulty: "medium"
  },
  {
    id: 2,
    name: "Chocolate Chip Cookies",
    description: "Soft and chewy homemade chocolate chip cookies loaded with chocolate chips. Perfect for any occasion!",
    ingredients: [
      "225g butter, softened",
      "200g brown sugar",
      "100g white sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "280g all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "340g chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Cream together butter and both sugars until light and fluffy.",
      "Beat in eggs one at a time, then add vanilla extract.",
      "In another bowl, mix flour, baking soda, and salt.",
      "Gradually blend the dry ingredients into the butter mixture.",
      "Stir in chocolate chips.",
      "Drop rounded tablespoons of dough onto ungreased cookie sheets.",
      "Bake for 9-11 minutes or until golden brown."
    ],
    cookingTime: 25,
    servings: 24,
    difficulty: "easy"
  },
  {
    id: 3,
    name: "Thai Green Curry",
    description: "A aromatic and creamy Thai curry with chicken, vegetables, and coconut milk. Balanced with spicy, sweet, and savory flavors.",
    ingredients: [
      "3 tbsp green curry paste",
      "400ml coconut milk",
      "500g chicken breast, sliced",
      "200g Thai eggplant, quartered",
      "100g green beans",
      "3 Thai basil leaves",
      "2 tbsp fish sauce",
      "1 tbsp brown sugar",
      "2 kaffir lime leaves",
      "1 tbsp vegetable oil"
    ],
    instructions: [
      "Heat oil in a large pan over medium-high heat.",
      "Add green curry paste and stir-fry for 2-3 minutes until fragrant.",
      "Pour in coconut milk and bring to a gentle boil.",
      "Add chicken slices and simmer for 8-10 minutes until cooked through.",
      "Add eggplant and green beans, simmer for 5 minutes.",
      "Season with fish sauce and brown sugar.",
      "Add kaffir lime leaves and Thai basil.",
      "Simmer for 2 more minutes and serve hot with jasmine rice."
    ],
    cookingTime: 30,
    servings: 4,
    difficulty: "medium"
  },
  {
    id: 4,
    name: "Caesar Salad",
    description: "A fresh and crispy salad with romaine lettuce, parmesan cheese, and homemade Caesar dressing topped with croutons.",
    ingredients: [
      "1 head romaine lettuce, chopped",
      "50g parmesan cheese, shaved",
      "100g croutons",
      "3 tbsp mayonnaise",
      "1 tbsp lemon juice",
      "1 tsp Dijon mustard",
      "2 cloves garlic, minced",
      "4 anchovy fillets",
      "Salt and pepper to taste",
      "2 tbsp olive oil"
    ],
    instructions: [
      "Make the dressing by whisking together mayonnaise, lemon juice, mustard, garlic, and anchovies.",
      "Gradually whisk in olive oil until emulsified.",
      "Season with salt and pepper to taste.",
      "Place chopped romaine in a large bowl.",
      "Pour dressing over lettuce and toss until well coated.",
      "Top with shaved parmesan and croutons.",
      "Serve immediately."
    ],
    cookingTime: 15,
    servings: 2,
    difficulty: "easy"
  },
  {
    id: 5,
    name: "Beef Wellington",
    description: "An elegant dish of beef tenderloin wrapped in mushroom paste and flaky puff pastry. Perfect for special occasions.",
    ingredients: [
      "1kg beef tenderloin",
      "400g cremini mushrooms, finely chopped",
      "200g pâté",
      "2 sheets puff pastry",
      "3 tbsp olive oil",
      "2 shallots, minced",
      "3 cloves garlic, minced",
      "30g fresh parsley, chopped",
      "Salt and pepper to taste",
      "1 egg, beaten (for egg wash)"
    ],
    instructions: [
      "Sear beef tenderloin in hot oil until browned on all sides. Cool slightly.",
      "Sauté mushrooms, shallots, and garlic until liquid evaporates. Cool completely.",
      "Mix cooled mushroom mixture with pâté and parsley.",
      "Spread mushroom mixture over the beef.",
      "Wrap beef with puff pastry, sealing edges with egg wash.",
      "Brush pastry with beaten egg.",
      "Bake at 400°F (200°C) for 25-30 minutes until golden and beef reaches desired doneness.",
      "Let rest for 10 minutes before slicing and serving."
    ],
    cookingTime: 60,
    servings: 6,
    difficulty: "hard"
  }
];

module.exports = recipes;