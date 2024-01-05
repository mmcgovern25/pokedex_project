class PostsView
  def display(posts)
    posts.each_with_index do |post, index|
      puts #{posts.name}
    end
  end
  # TODO: implement some methods here when controller needs to `puts` or `gets`
end
