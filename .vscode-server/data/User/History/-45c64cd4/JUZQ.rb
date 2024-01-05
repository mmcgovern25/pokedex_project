require_relative ../views/orders_view
require_relative
require_relative
require_relative #################################

class OrdersController
  def initialize(order_repository, meal_repository, customer_repository, employee_repository)
    @meal_repository = meal_repository
    @customer_repository = customer_repository
    @employee_repository = employee_repository
    @order_repository = order_repository

    @meals_view = MealsView.new
    @customers_view = CustomersView.new
    @orders_view = OrdersView.new
  end

  def add
    ##########################

    end
  end

  def list_undelivered_orders
    all_orders = @order_repository.undelivered_orders
    @orders_view.display_orders(all_orders)
  end

  def list_my_orders


  private
    def select_meal
    end

    def select_customer
    end

    def select_employee
   end
end
