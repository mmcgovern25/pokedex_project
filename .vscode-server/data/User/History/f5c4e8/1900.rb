class PostsView
  def display(posts)
    posts.each_with_index do |post, index|
      puts "1. #{post.title} - #{post.url} - #{post.votes}"
    end
  end
  # TODO: implement some methods here when controller needs to `puts` or `gets`
end

1. article name - www.article.com - 23
2. article name - www.article.com - 23
