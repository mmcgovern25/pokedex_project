# TODO: Write a seed
# create 5 users
# create a loop that will run 5 times (5.times do)








5.times do
  user = User.new(Faker::Internet.user)
  user.save
  rand(5..10).times do
    post = Post.new(title: Faker::BossaNova.song)
  end
end














# require 'faker'

# puts 'Creating 100 fake restaurants...'
# 100.times do
#   restaurant = Restaurant.new(
#     name:    Faker::Company.name,
#     address: "#{Faker::Address.street_address}, #{Faker::Address.city}",
#     rating:  rand(0..5)
#   )
#   restaurant.save!
# end
# puts 'Finished!'


# in each run, we want a new user
# retrieve collection of all users
# for each user create 5 posts
