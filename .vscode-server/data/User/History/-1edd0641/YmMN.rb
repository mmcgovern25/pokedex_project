# TODO: Write a seed
# create 5 users
# create a loop that will run 5 times (5.times do)
5.times do
  user = User.new(username: "mattmcg37" , email: "mattmcg37@gmail")
  num_posts = rand(5..10)
  user.save
end

# in each run, we want a new user
# retrieve collection of all users
# for each user create 5 posts