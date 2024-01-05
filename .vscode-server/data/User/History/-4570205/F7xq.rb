# rubocop:disable Lint/LiteralInInterpolation
# DO NOT remove the two lines below, needed for display purposes
require_relative "../spec/helper/board"

require_relative "corn"
require_relative "rice"


puts "\n\n📝 Day One: Corn"
# 1. Instantiate a corn crop
new_corn = Corn.new
# 2. Water the corn crop
new_corn.water!
# 3. Replace 'TODO' with the value of `grains` for your crop
puts "The corn crop produced #{new_corn.grains} grains"
# 4. Replace 'TODO' with the state of the crop ('ripe' or 'not ripe')
puts "The corn crop is #{new_corn.ripe?}"



puts "\n\n📝 Day Two: Rice"
# 1. Instantiate a rice crop
new_rice = Rice.new
# 2. Water the rice crop
new_rice.water!
# 3. Transplant the rice crop
new_rice.transplant!
# 4. Replace 'TODO' with the value of `grains` for your crop
puts "The rice crop produced #{new_rice.grains} grains"
# 5. Replace 'TODO' with the state of the crop ('ripe' or 'not ripe')
puts "The rice crop is #{new_rice.ripe?}"


# DO NOT remove the two lines below, needed for display purposes
Board.new.display

# rubocop:enable Lint/LiteralInInterpolation
