# Create a new order
# Get all the undelivered orders
class Repository
  def initialize(csv_file_path)
    @csv_file = csv_file_path
    @orders = []
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
