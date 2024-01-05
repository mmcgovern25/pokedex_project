# TODO: Implement the Cookbook class that will be our repository
# initialize(csv_file_path) which loads existing Recipe from the CSV
require_relative "recipe"
require "csv"
class Cookbook

  def initialize(csv_file_path)
    @csv = csv_file_path
    @recipes = []
  end

  CSV.foreach(@csv) do |row|
  # Here, row is an array of columns
  # p row[0]
  # p row[1]
    recipe_new = Recipe.new(row[0], row[1])

  # p recipe_new
  # p row
    @recipes << recipe_new
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
  end

  private

  def save_csv
    CSV.open(filepath, "wb") do |csv|
    @recipes.each do |recipe|
      csv << [recipe.name, recipe.description]
      end
    end
  end

end
