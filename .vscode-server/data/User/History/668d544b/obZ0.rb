require_relative "cow"
class Cow < Animals

  def initialize
    @milk = 0
  end

  def talk
    super()
    "moo"
  end

  def feed!
    super()
    @milk += 2
  end
end
