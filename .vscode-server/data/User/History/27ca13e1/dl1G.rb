require_relative "chicken"
class Chicken < Animals

  def initialize
    @gender = gender
    @eggs = 0
  end

  def talk
    super()
    case @gender
    when @gender = "male" then "cock-a-doodle-doo"
    when @gender = "female" then "cluck cluck"
    end
  end

  def feed!
    super()
    @eggs += 2 if @gender == "female"
   else super()
end
