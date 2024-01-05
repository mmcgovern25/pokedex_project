# id, a username and a password,
class Employee
  attr_accessor :id, :username, :password, :role

  # they have different privileges depending of their role.
  def initialize(attributes = {})
    @id = attributes[:id]
    @username = attributes[:username]
    @password = attributes[:password]
    @role = attributes[:role]
  end

  employee.manager
  employee.rider
end
