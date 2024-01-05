require_relative ../views/orders_view

class OrdersController
  def initialize(order_repository, meal_repository, customer_repository, employee_repository)
    @meal_repository = meal_repository
    @customer_repository = customer_repository
    @employee_repository = employee_repository
    @order_repository = order_repository

    @orders_view = OrdersView.new
  end

  def list_undelivered_orders
    all_orders = @order_repository.undelivered_orders
    @orders_view.display_orders(all_orders)
  end

  def list_my_orders

end
