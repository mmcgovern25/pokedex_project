# TODO: Implement the Cookbook class that will be our repository
# initialize(csv_file_path) which loads existing Recipe from the CSV
require_relative "recipe"
class Cookbook

  def initialize(csv_file_path)
    @recipes = []
  end

  def all
    @recipes
  end

  def create(recipe)
    @recipe << recipe.new
  end

  def destroy(recipe_index)
    @recipe[-1]
  end
end