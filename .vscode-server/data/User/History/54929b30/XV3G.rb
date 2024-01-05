# TODO: Implement the Cookbook class that will be our repository
# initialize(csv_file_path) which loads existing Recipe from the CSV
require_relative "recipe"
require "csv"
class Cookbook

  def initialize(csv_file_path)
    @recipes = []

filepath = csv_file_path

CSV.foreach(filepath) do |row|
  # Here, row is an array of columns
  p row[0]
  p row[1]
  recipe_new = Recipe.new(row[0], row[1])
end
  end

  def all
    @recipes
  end

  def create(recipe)
    @recipes << recipe
  end

  def destroy(recipe_index)
    @recipes.delete_at(recipe_index)
  end
end
