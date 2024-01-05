# TODO: require relevant files to bootstrap the app.
# Then you can test your program with:
#   ruby app.rb
require_relative "app/models/meal" # You need to create this file!
require_relative "app/controllers/meals_controller" # You need to create this file!
require_relative "router"
require_relative "app/repositories/meal_repository"


csv_file_path = File.join(__dir__, 'data', 'meals.csv')
meal_repo  = MealRepository.new(csv_file_path)
controller = MealsController.new(meal_repo)

router = Router.new(controller)

# Start the app
router.run
