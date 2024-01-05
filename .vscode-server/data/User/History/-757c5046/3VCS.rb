require_relative "../views/view"

class PostsController
  def initialize
    @view = PostsView.new
  end

  def index
    # DO NOT WRITE SQL QUERIES
    # TODO: gather all posts from the database
    all_posts = Post.all
    # TODO: give them to the view to be printed
    @view.display(all_posts)
  end

  def create
    # DO NOT WRITE SQL QUERIES
    # TODO: create a postd
    title = @view.ask_user_for(:title)
    url = @view.ask_user_for(:url)
    post = Post.new(title: title, url: url)
    post.save
  end

  def update
    all_posts = Post.all
    @view.display
    choosen_update = @view.edit
    title_new = view.ask_user_for(:title)
    url_new = view.ask_user_for(:url)
    post = all_posts[choosen_update]
    post.title = title_new
    post.url = url_new
    post.save
    # DO NOT WRITE SQL QUERIES
    # TODO: update a post
  end

#   def destroy
#     # DO NOT WRITE SQL QUERIES
#      ######  post.destroy
#     # TODO: destroy a post
#   end

#   def upvote
#     # DO NOT WRITE SQL QUERIES
#     # TODO: increment the `votes` column for a post
#   end
end
