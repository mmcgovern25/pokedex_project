class Animals
  attr_reader :energy

  def initialize
    @energy = 0
  end

  def feed!
    @energy += 1
  end

  # when fed, energy increases by 1
