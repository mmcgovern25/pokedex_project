class Lasagna
  def initialize(hash = {})
    @flavor = hash:[flavor]
    @ingredients = hash: [ingredients]
    @prep_time = hash: [prep_time]
    @cooking_time = hash: [cooking_time]
  end



  def expected_minutes_in_oven
    @cooking_time
  end

  def remaining_minutes_in_oven(elapsed_minutes)
    remaining_time = expected_minutes_in_oven - elapsed_minutes

  end

  def total_time
    @cooking_time + @prep_time
  end

end

hash = {flavor: "Bolognesi", ingredients: ["Cheese", "tomatos", "pasta"], prep-time: 20, cook_time: 60}
bolonesi = Lasagna.new("Bolognesi", ["Cheese", "tomatos", "pasta"], 20, 60)

p bolonesi

#   Create a Lasagna Class.
# We need to save some characteristics about our lasagna:

# 1.1 Flavor - should be a String 1.2 Ingredients - should be an Array of Strings 1.3 Prep Time - should be an Integer (minutes) 1.4 Cooking Time = should be an Integer (minutes)

# Return how many minutes the lasagna should stay in the oven
# Define the Lasagna#expected_minutes_in_oven method that returns how many minutes the lasagna should be in the oven.

# Calculate the remaining oven time in minutes
# Define the Lasagna#remaining_minutes_in_oven method that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven.

# Calculate the total time you need to spend cooking the lasagna.
# Define a Lasagna#total_time that calculates the total time a person needs to cook the lasagna.