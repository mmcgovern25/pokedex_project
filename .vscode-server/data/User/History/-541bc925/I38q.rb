require_relative "../views/customers_view.rb"
require_relative "../models/customer.rb"

class CustomersController
  def initialize(customer_repository)
    @customer_repository = customer_repository
    @customers_view = CustomersView.new
  end

  def add
    customer_name = @customers_view.ask_user_for("name")
    customer_address = @customers_view.ask_user_for("address")
    new_customer = Customer.new(name: customer_name, address: customer_price)
    @customer_repository.create(new_customer)
  end

  def list
    all_customers = @customer_repository.all
    @customers_view.display_list(all_customers)
  end
end
