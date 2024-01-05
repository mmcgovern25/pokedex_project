class BookmarksController < ApplicationController


  def new
    @bookmark = Bookmark.new
  end

  def create
    # 1. initialize the new plant with the info that comes from the Form
    @bookmark = Bookmark.new(bookmark_params)
    # 2. assign the garden to the plant
    @bookmark = Bookmark.find(params[:bookmark_id])
    # 3. redirect OR render the form with errors
    if @bookmark.save
      redirect_to bookmark_path(@bookmark)
    else
      # render 'path/to/the/html/to/be/rendered'
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @bookmark = Bookmark.find(params[:id])
    @bookmark.destroy

    redirect_to bookmark_path(@bookmark.index)
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:comment, :movie_id, :list_id)
  end
end
