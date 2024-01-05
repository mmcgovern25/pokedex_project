DISHES_CALORIES = {
  "Hamburger" => 250,
  "Cheese Burger" => 300,
  "Veggie Burger" => 540,
  "Vegan Burger" => 350,
  "Sweet Potatoes" => 230,
  "Salad" => 15,
  "Iced Tea" => 70,
  "Lemonade" => 90
}

# define which each meal is
# create seperate constant to store the meals in

MENU = {
"Cheesy Combo" =>	["Cheese Burger", "Sweet Potatoes", "Lemonade"]
"Veggie Combo" => ["Veggie Burger", "Sweet Potatoes", "Iced Tea"]
"Vegan Combo" => ["Vegan Burger", "Salad", "Lemonade"]
}

def poor_calories_counter(burger, side, beverage)
  DISHES_CALORIES[burger] + DISHES_CALORIES[side] + DISHES_CALORIES[beverage]
end

def calories_counter(orders)
  #initiate sum
  sum = 0
  #iriate through each element of array
  orders.each do |order|
  if DISHES_CALORIES.key?(order)
    DISHES_CALORIES(order) += sum
  else
  sum += poor_calories_counter(MENU(order)[0], MENU(order)[1], MENU(order)[2])

  return sum
  # TODO: return number of calories for a less constrained orde
end

orders = ["Sweet Potatoes", "Vegan Combo", "Iced Tea", "Salad"]
puts calories_counter(orders)
