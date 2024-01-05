class ListsController < ApplicationController

  def index
    @movies = movies.all
  end
end
