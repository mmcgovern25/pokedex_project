require_relative "animals"
class Chicken < Animal
  attr_accessor :eggs

  def initialize(gender)
    super()
    @gender = gender
    @eggs = 0
  end

  def talk
    case @gender
    when @gender = "male" then "cock-a-doodle-doo"
    when @gender = "female" then "cluck cluck"
    end
  end

  def feed!
    super()
    @eggs += 2 if @gender == "female"
  end
end