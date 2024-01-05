class MealRepository
  def initialize(csv_file_path)
    @csv_file = csv_file_path
    @Meal = []
  end

  meal = []
  CSV.foreach(csv_file, headers: :first_row, header_converters: :symbol) do |row|
    row[:id]    = row[:id].to_i
    meal << Meal.new(row)
  end

  def create(meal)
    meal.id = @next_id
    @next_id += 1
    @meal << meal
    save_csv
  end
end


# Get all the meals
# find a specific meal thanks to its id
