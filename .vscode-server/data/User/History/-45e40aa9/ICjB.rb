class Router
  def initialize(meals_controller, customers_controller)
    @meals_controller = meals_controller
    @customers_controller = customers_controller
    @running = true
  end

  def run
    while @running
      display_menu
      action = gets.chomp.to_i
      check_action(action)
    end
  end

  def display_menu
    puts " "
    puts "Welcome to your Restaurant Manager"
    puts ""
    puts "*  --  *  --  *  --  *  --  *"
    puts ""
    puts "1. List All Meals"
    puts "2. Create a New Meal"
    puts "3. Edit a Meal"
    puts "4. Create a New Customer"
    puts "5. List All Customers"
    puts "6. Edit a Customer"
    puts "7. Quit"
  end

  def check_action(action)
    case action
    when 1
      @meals_controller.list
    when 2
      @meals_controller.add
    when 3
      @meals_controller.edit
    when 4
      @customers_controller.add
    when 5
      @customers_controller.list
    when 6
      @customers_controller.edit
    when 7
      @running = false
    else
      puts "Type a valid number [1, 2, 3, 4, 5, 6, 7]"
    end
  end
end
