#  TODO: Define your Controller Class here, to orchestrate the other classes
require_relative "./cookbook"
require_relative "./view"

class Controller

  def initialize(cookbook)
# takes an instance of the Cookbook as an argument.
    @cookbook = cookbook
    @view = view
  end

  def recipe_list
    all_recipes = @cookbook.all
    @view.display(all_recipes)
  end


def
list all the recipes
add a new recipe
remove an existing recipe
end
