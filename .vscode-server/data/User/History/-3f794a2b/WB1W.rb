class JobsController < ApplicationController
  def index
    @jobs = Jobs.all
  end

  def show
    @jobs = Jobs.find(params[:id])
  end

  def new
    @jobs = Job.new
  end

  def create
    @jobs = Job.new(jobs_params)
    if @jobs.save
      redirect_to @jobs, notice: "Job was successfully created."
    else
      render :new
    end
  end

private

  def jobs_params
    params.require(:jobs).permit(:name, :description, :price)
  end
end
