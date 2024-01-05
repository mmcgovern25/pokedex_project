require_relative "./view"

class Controller
  def initialize(cookbook)
    @cookbook = cookbook
    @view = View.new
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
