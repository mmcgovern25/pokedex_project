require_relative ../views/orders_view

class OrdersController
def initialize(order_repository, )
  @order_repository = order_repository
  @orders_view = OrdersView.new
end

  def list_undelivered_orders
    all_orders = @order_repository.undelivered_orders
    @orders_view.display_orders(all_orders)
  end
end
