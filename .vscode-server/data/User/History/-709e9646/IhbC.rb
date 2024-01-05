class TasksController < ApplicationController
  def all
    Task.all
  end
end
