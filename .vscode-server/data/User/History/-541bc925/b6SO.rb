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
    new_customer = Customer.new(name: customer_name, address: customer_address)
    @customer_repository.create(new_customer)
  end

  def list
    all_customers = @customer_repository.all
    @customers_view.show_customer(all_customers)
  end

  def edit
    list
    id = @customers_view.choose_customer
    customer = @customers_repository.find(id)
    new_name = @customers_view.ask_user_for_stuff("name")
    new_address = @customers_view.ask_user_for_stuff("address")
    customer.name = new_name
    customer.address = new_address
    @customers_repository.edit
  end
end
