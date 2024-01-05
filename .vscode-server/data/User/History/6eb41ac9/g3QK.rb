# Each order has an id, a meal, a customer, an employee plus a delivered boolean to record whether order has been delivered.
class Order
  attr_accessor :id, :meal, :customer, :employee, :delivered

  def initialize(attributes = {})
    @id = attributes[:id]
    @meal = attributes[:meal]
    @customer = attributes[:customer]
    @employee = attributes[:employee]
    @delivered = attributes[:delivered]
  end

  def delivered?
    @order == "delivered"
  end
end
