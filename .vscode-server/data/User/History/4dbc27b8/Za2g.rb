class ListsController < ApplicationController

  def index
    @movies = movies.all
  end

  def show
  end

  def new
    @movies = movies.new
  end

  def create
    @movies = movies.new(movies_params)

    if @movies.save
      redirect_to @movies, notice: "Movie was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

end
