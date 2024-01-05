# Create a new order
# Get all the undelivered orders
class Repository
  def initialize(csv_file_path, meal_repository, customer_repository, employee_repository)
    @csv_file = csv_file_path
    @orders = []
    @meal_repository = meal_repository
    @customer_repository = customer_repository
    @employee_repository - employee_repository
    load_csv if File.exist?(@csv_file)
  end

  def create(order)
    order.id = @next_id
    @next_id += 1
    @orders << order
    save_csv
  end

  private

  def load csv
    CSV.foreach(@csv_file, headers: :first_row, header_converters: :symbol) do |row|
      row[:id]    = row[:id].to_i
      row[:meal]  = @meal_repository. find(row[:meal_id].to_i)
      row[:customer]  = @customer_repository. find(row[:customer_id].to_i)
      row[:employee]  = @employee_repository. find(row[:employee_id].to_i)
      @orders << order
    end
   end
  end
end
