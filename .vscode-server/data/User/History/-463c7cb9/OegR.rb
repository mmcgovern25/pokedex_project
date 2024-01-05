class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def show
  end

  def new
    @restaurant = Restaurant.find(params[:id])
    @restaurant = Restaurant.new
  end

  # def create
  #   @restaurant = Restaurant.new(restaurant_params)

  #   if @restaurant.save
  #     redirect_to @restaurant, notice: "Restaurant was successfully created."
  #   else
  #     render :new, status: :unprocessable_entity
  #   end
end
