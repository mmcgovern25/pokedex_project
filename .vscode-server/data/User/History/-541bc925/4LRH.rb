require_relative "../views/meals_view.rb"
require_relative "../models/meal.rb"

class CustomersController
  def initialize(customer_repository)
    @customer_repository = customer_repository
    @customers_view = CustomersView.new
  end

  def add
    customer_name = @customers_view.ask_user_for("name")
    customer_address = @customers_view.ask_user_for("address").to_i
    new_meal = Meal.new(name: meal_name, price: meal_price)
    @meal_repository.create(new_meal)
  end

  def list
    all_customers = @customer_repository.all
    @customers_view.display_list(all_customers)
  end
end
