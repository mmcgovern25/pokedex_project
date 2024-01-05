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
    @recipes << recipe
  end

  def destroy(recipe_index)
    @recipes.delete_at(recipe_index)
  end
end
