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
  end

  def add
    @cookbook.create
  end

  def remove
    @cookbook.destroy
  end
end
