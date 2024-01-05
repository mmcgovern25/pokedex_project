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

  def eggs
   if @gender = "female" super() += 2
   else super()
end
