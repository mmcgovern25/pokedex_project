require "faker"

5.times do
  user = User.new(Faker::Internet.user)
  user.save
  rand(5..10).times do
    post = Post.new(title: Faker::BossaNova.song, url: Faker::Internet.url, votes: rand(0..100))
    post.user = user
    post.save
  end
end
