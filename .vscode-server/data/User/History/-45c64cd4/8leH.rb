require_relative ../views/orders_view

class OrdersController
def initialize(order_repository, )
  @order_repository = order_repository
  @orders_view = OrdersView.new
end

  def list_orders
    all_orders = @order_repository.all
    @orders_view.display_orders(all_orders)
  end
end
