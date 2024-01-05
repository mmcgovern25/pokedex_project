class ListsController < ApplicationController

  def index
    @lists = list.all
  end

  def show
  end

  def new
    @list = lists.new
  end

  def create
    @list = list.new(list_params)

    if @list.save
      redirect_to list_pathI(@list), notice: 'List was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

end
