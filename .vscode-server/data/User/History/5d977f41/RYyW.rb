# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
puts 'Cleaning database...'
Restaurant.destroy_all

puts 'Creating restaurants..'
jappa = {name: 'Jappa', address: 'Ipanema', phone_number: '774-253-2724', category: 'japanese'}
min_wu = {name: 'Min Wu', address: 'Copacabana', phone_number: '774-253-2725', category: 'chinese'}
walids_cafe = {name: 'Walids Cafe', address: 'Ipanema', phone_number: '774-253-2726', category: 'french'}
big_bens = {name: 'Big Bens', address: 'Ipanema', phone_number: '774-253-2727', category: 'belgian'}
mario_and_luigis  = {name: 'Mario and Luigis', address: 'Ipanema', phone_number: '774-253-2724', category: 'italian'}
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
[jappa, min_wu, walids_cafe, big_bens, mario_and_luigis].each do |attributes|
  restaurant = Restaurant.create!(attributes)
  puts "Created #{restaurant.name}"
end
puts 'Finished!'
