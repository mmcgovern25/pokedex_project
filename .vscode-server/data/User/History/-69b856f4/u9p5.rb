Class OrdersView
def list_deliveries(orders)
  orders.each do |order|
    puts "#{index + 1}. #{order.employee}
