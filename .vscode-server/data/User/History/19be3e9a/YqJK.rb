class MealRepository
  def initialize(csv_file_path)
    @csv_file = csv_file_path
    @Meal = []
  end

  def load_csv
    if File.exist?(csv_file_path)
  CSV.foreach(csv_file, headers: :first_row, header_converters: :symbol) do |row|
    row[:id]    = row[:id].to_i
    row[:name]  = row[:name]
    # row to list all meals
    meal << Meal.new(row)
  end

  def create(meal)
    meal.id = @next_id
    @next_id += 1
    @meal << meal
    save_csv
  end

  #find meal thanks to ID



end


# Get all the meals
# find a specific meal thanks to its id
