class PostsView
  def display(posts)
    posts.each_with_index do |post, index|
      puts "#{index + 1}. #{post.title} - #{post.url} - #{post.votes}"
    end
  end

  def ask_user_for(stuff)
    puts "what is the #{stuff}?"
    return gets.chomp
  end
end
