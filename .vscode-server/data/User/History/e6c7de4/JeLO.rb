class SessionsController
  def initialize(employee_repository)
    @employee_repository = employee_repository
    @employee_view = employees_view
  end
