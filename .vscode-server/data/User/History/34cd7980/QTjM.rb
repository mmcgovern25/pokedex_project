class QuestionsController < ApplicationController
  def ask
  end

  def answer
    user_question = params[:answer]
  end
end
