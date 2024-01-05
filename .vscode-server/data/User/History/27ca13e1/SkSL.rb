require_relative "chicken"
class Chicken < Animals

  def initialize
    @gender = gender
    @eggs = 0
  end

  def talk
    super()
    @talk = "cock-a-doodle-doo"
  end

  end
