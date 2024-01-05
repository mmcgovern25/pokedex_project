# Each meal has an id, a name and a price.
# initialize with a hash?

class Meal
  attr_accessor :id, :name, :price

  def initialize(attributes = {})
    @id = attributes[:id]
    @name = attributes[:name]
    @price = attributes[:price]
  end

end

meal = Meal.new(id: 1, name: "french fries", price: 15)
p meal
