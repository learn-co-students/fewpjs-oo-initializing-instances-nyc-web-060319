// Write your code here
class Breakfast {
  constructor(food, drink) {
  this.food = food;
  this.drink = drink
  }
}

let b1 = new Breakfast("Pie", "Water")


class Lunch{
  constructor(salad, soup, drink){
    this.salad = salad;
    this.soup = soup;
    this.drink = drink
  }
}

let l1 = new Lunch("caesar", "chixnoodle", "water")

class Dinner {
  constructor(salad, soup, entree, dessert){
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert
  }
}

let d1 = new Dinner("greek", "minnestrone", "pasta", "cheesecake")
