require_relative "../views/view.rb"

class MealController
  def initialize(meal_repository)
      @meal_repository = meal_repository
      @view = View.new
  end

  def add
    meal_name = @view.ask_user_for("name")
  end

  def all
    @meals
  end

end
