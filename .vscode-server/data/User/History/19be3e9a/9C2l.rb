class MealRepository
  def initialize
    @Meal = []
  end

  def create(meal)
    meal.id = @next_id
    @next_id += 1
    @meal << meal
    save_csv
  end
end
