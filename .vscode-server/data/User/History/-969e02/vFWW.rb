class EmployeeRepository
  def initialize(csv_file_path)
    @csv_file = csv_file_path
    @employees = []
    @next_id = 1
    load_csv if File.exist?(@csv_file)
  end

  def all
    @employees
  end

  def find(id)
    @employees.find { |employee| employee.id == id }
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


end
