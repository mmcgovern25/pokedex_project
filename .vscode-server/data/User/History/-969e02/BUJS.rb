class EmployeeRepository
  def initialize(csv_file_path)
    @csv_file = csv_file_path
    @employees = []
    @next_id = 1
    load_csv if File.exist?(@csv_file)
  end



end
