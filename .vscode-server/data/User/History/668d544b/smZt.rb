require_relative "animals"
class Cow < Animal
  attr_accessor :milk

  def initialize
    super()
    @milk = 0
  end

  def talk
    "moo"
  end

  def feed!
    super()
    @milk += 2
  end
end
