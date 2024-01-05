class Controller
  def initialize(cookbook)
    @cookbook = cookbook
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
