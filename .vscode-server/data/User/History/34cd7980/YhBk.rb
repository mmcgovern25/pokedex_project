class QuestionsController < ApplicationController
  def ask
  end

  def answer
    user_message = params[:answer]
  end
end
