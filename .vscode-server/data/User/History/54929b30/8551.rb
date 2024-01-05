require_relative "recipe"
require "csv"
class Cookbook
  def initialize(csv_file_path)
    @csv = csv_file_path
    @recipes = []
    load_csv
  end

  def all
    @recipes
  end

  def create(recipe)
    @recipes << recipe
    save_csv
  end

  def destroy(recipe_index)
    @recipes.delete_at(recipe_index)
    save_csv
  end

  private

  def save_csv
    CSV.open(@csv, "wb") do |csv|
      @recipes.each do |recipe|
        csv << [recipe.name, recipe.description]
      end
    end
  end

  def load_csv
    CSV.foreach(@csv) do |row|
      @recipes << Recipe.new(row[0], row[1])
    end
  end
end
