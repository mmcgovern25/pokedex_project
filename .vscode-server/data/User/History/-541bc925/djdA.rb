require_relative "../views/meals_view.rb"
require_relative "../models/meal.rb"

class CustomersController
  def initialize(meal_repository)
    @meal_repository = meal_repository
    @meals_view = MealsView.new
  end

  def add
    meal_name = @meals_view.ask_user_for("name")
    meal_price = @meals_view.ask_user_for("price").to_i
    new_meal = Meal.new(name: meal_name, price: meal_price)
    @meal_repository.create(new_meal)
  end

  def list
    all_customers = @customer_repository.all
    @customers_view.display_list(all_customers)
  end
end
