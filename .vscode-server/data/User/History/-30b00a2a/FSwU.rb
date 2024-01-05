require_relative "../views/view.rb"

class MealController
  def initialize(meal_repository)
      @meal_repository = meal_repository
  end

  def add

  end

  def all
    @meals
  end

end
