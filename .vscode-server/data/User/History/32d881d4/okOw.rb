# TODO: require relevant files to bootstrap the app.
# Then you can test your program with:
#   ruby app.rb
require_relative "app/models/meal.rb"    # You need to create this file!
require_relative "app/controllers/meal_controller.rb" # You need to create this file!
require_relative "router"

csv_file_path = File.join(__dir__, 'data', 'meals.csv')
meal_repo  = MealRepository.new(csv_file)
controller = Controller.new(meal)

router = Router.new(controller)

# Start the app
router.run
