class PostsView
  def display(posts)
    posts.each_with_index do |post, index|
      puts "#{index + 1}. #{post.title} - #{post.url} - #{post.votes}"
    end
  end
  # TODO: implement some methods here when controller needs to `puts` or `gets`
end
