require_relative "./view"
require_relatiive "./recipe"
class Controller
  def initialize(cookbook)
    @cookbook = cookbook
    @view = View.new
  end

  def list
    @cookbook.all
    @view.display_list(recipes)
  end

  def add
    new_name = @view.ask_for_name
    new_description = @view.ask_for_description
    Recipe.new(new_name, new_description)
    @cookbook.create(new_recipe)
  end

  def remove
    @cookbook.destroy

  end
end
