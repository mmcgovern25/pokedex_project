require "csv"
require_relative "../models/customer"

# create a new customer
# Get all the customers
# find a specific customer thanks to its id

class CustomerRepository
  def initialize(csv_file_path)
    @csv_file = csv_file_path
    @customers = []
    @next_id = 1
    load_csv if File.exist?(@csv_file)
  end

  def all
    @customers
  end

  def create(customer)
    customer.id = @next_id
    @next_id += 1
    @customers << customer
    save_csv
  end

  #find meal thanks to ID, check if correct
  def find(id)
    @customers.find { |customer| customer.id == id }
  end

private

  def load_csv
    CSV.foreach(@csv_file, headers: :first_row, header_converters: :symbol) do |row|
      row[:id]    = row[:id].to_i
      @customers << Customer.new(row)
    end

    if @customers.empty?
      @next_id = 1
    else
      @next_id = @customers.last.id + 1
    end
  end

  def save_csv
    CSV.open(@csv_file, "wb") do |csv|
      csv << ["id", "name", "address"]
      @customers.each do |customer|
        csv << [customer.id, customer.name, customer.address]
      end
    end
  end
end
