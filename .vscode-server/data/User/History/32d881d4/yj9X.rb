# TODO: require relevant files to bootstrap the app.
# Then you can test your program with:
#   ruby app.rb
require_relative "app/models/meal.rb" # You need to create this file!
require_relative "app/controllers/meals_controller.rb" # You need to create this file!
require_relative "router.rbf"
require_relative "app/repositories/meal_repository.rb"


csv_file_path = File.join(__dir__, 'data', 'meals.csv')
meal_repo  = MealRepository.new(csv_file_path)
controller = MealController.new(meal_repo)

router = Router.new(controller)

# Start the app
router.run
