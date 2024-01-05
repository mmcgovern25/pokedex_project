# id, a username and a password,
class Employee
  attr_accessor :id, :username, :password

  # they have different privileges depending of their role.
  def initialize(attributes = {})
    @id = attributes[:id]
    @username = attributes[:username]
    @password = attributes[:password]
  end

  employee.manager

  employee.rider
end
