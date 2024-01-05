class BookmarksController < ApplicationController

  def show
  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(list_params)

    if @list.save
      redirect_to list_pathI(@list), notice: 'List was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end

    def destroy
    end
end
