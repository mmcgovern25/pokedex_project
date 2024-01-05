class SessionsController
  def initialize(employee_repository)
    @employee_repository = employee_repository
    @employee_view = employees_view
  end

  def login
    username = @sessions_view.ask_for(:username)
    password = @sessions_view.ask_for(:password)

    employee = @employee_repository.find_by_username(username)
    return employee if employee && employee.password == password

    @sessions_view.wrong_credentials
    login
  end
end
