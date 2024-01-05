#  TODO: Define your Controller Class here, to orchestrate the other classes
require_relative "./cookbook"
require_relative "./view"

class Controller

  def initialize(cookbook)
    # takes an instance of the Cookbook as an argument.
    @cookbook = cookbook
    # @view = view
  end

  def list
    @cookbook.all
  ends

  def add
  @cookbook.create
  end

end
#   add a new recipe
# remove an existing recipe
