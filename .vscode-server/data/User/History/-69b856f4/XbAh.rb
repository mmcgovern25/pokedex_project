Class OrdersView
def display_orders(orders)
  orders.each do |order|
    puts "#{index + 1}. #{order.employee.username} must deliver #{order.meal.name} to #{{order.customer.name} to }