require_relative "../views/view.rb"

class MealController
  def initialize(meal_repository)
      @meal_repository = meal_repository
      @view = View.new
  end

  def add
    meal_name = @view.ask_user_for("name")
    meal_price = @view.ask_user_for("price").to_i
    new_meal = Meal.new({name: meal_name, price: meal_price})
    @meal_repository.create(new_meal)
  end

  def all
    @meals
  end

end
