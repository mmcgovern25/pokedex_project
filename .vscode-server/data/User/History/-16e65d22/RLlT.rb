# TODO: implement the router of your app.
class Router
# dont initiate with controller, but then what do we initiate with?
# just print TODO for now when user asks for a task?
  def initialize(controller)
    @controller = controller
    @running    = true
  end

  def run
    puts "Welcome to Food Delivery"
    puts "           --           "

    while @running
      display_tasks
      action = gets.chomp.to_i
      print `clear`
      route_action(action)
    end
  end

  private

  def route_action(action)
    case action
    when 1 then @controller.list
    when 2 then @controller.add
    when 3 then @controller.remove
    when 4 then stop
    else
      puts "Please press 1, 2, 3 or 4"
    end
  end

  def stop
    @running = false
  end

  def display_menu
    puts ">."
    puts "What do you want to do next?"
    puts "1 - List all meals"
    puts "2 - Add a new meal"
    puts "3 - Remove a meal"
    puts "4 - Stop and exit the program"
  end
end
