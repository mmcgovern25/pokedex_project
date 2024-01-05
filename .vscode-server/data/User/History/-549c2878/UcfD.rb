# Create a new order
# Get all the undelivered orders
class Repository
  def initialize(csv_file_path, meal_repository, customer_repository, employee_repository)
    @csv_file = csv_file_path
    @meal_repository = meal_repository
    @customer_repository = customer_repository
    @employee_repository - employee_repository
    @next_id = 1
    load_csv if File.exist?(@csv_file)
  end

  def create(order)
    order.id = @next_id
    @next_id += 1
    @orders << order
    save_csv
  end
end
