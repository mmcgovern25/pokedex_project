# Create a new order
# Get all the undelivered orders
class Repository
  def initialize(csv_file_path, meal_repository, customer_repository, employee_repository)
    @csv_file = csv_file_path
    @orders = []
    @meal_repository = meal_repository
    @customer_repository = customer_repository
    @employee_repository - employee_repository

    @next_id += 1
    load_csv if File.exist?(@csv_file)
    end
  end

  def create(order)
    order.id = @next_id
    @next_id += 1
    @orders << order
    save_csv
  end

  def undelivered_orders
    @orders.reject {|order| order.delivered?}
  end

  private

  def save_csv
    CSV.open(@csv_file, "wb") do |csv|
      csv << %w[id delivered meal_id customer_id employee_id]
      @orders.each do |order|
        csv << [order.id, order.delivered?, order.meal.id, order.customer.id, order.employee.id]
      end
    end
  end



  def load csv
    CSV.foreach(@csv_file, headers: :first_row, header_converters: :symbol) do |row|
      row[:id]    = row[:id].to_i
      row[:meal]  = @meal_repository. find(row[:meal_id].to_i)
      row[:customer]  = @customer_repository. find(row[:customer_id].to_i)
      row[:employee]  = @employee_repository. find(row[:employee_id].to_i)
      row[delivered] = row[:delivered] == "true"
      @orders << order.new(row)
    end
    return if @orders.empty?

    @next_id = @orders.last.id + 1
   end
end
