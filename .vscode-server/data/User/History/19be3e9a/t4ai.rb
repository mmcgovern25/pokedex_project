require "csv"
require_relative "../models/meal"

class MealRepository
  def initialize(csv_file_path)
    @csv_file = csv_file_path
    @meals = []
    @next_id = 1
    load_csv if File.exist?(@csv_file)
  end

  def create(meal)
    meal.id = @next_id
    @next_id += 1
    @meals << meal
    save_csv
  end

  #find meal thanks to ID, check if correct
  def find(id)
    @meals.select { |meal|meal.id == id }.first
  end

private

  def load_csv
    CSV.foreach(@csv_file, headers: :first_row, header_converters: :symbol) do |row|
      row[:id]    = row[:id].to_i
      row[:name]  = row[:name]
      row[:price] = row[:price].to_i
      new_meal = Meal.new
      @meals << Meal.new(row)
    end
    if @meals.empty?
      @next_id = 1
    else
      @next_id = @meals.last.id + 1
    end
  end

  def save_csv
    CSV.open(@csv_file, "wb") do |csv|
      csv << ["id", "name", "price"]
      #iterate through @patients
      @meals.each do |meal|
        csv << [meal.id, meal.name, meal.price]
      end
    end
  end

#get all the meals, need more info here on how to store data within meals_data
# this is not correct, need a proper function that will return entire array of meals
  def all
    @meals
  end
end
