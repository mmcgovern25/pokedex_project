class QuestionsController < ApplicationController
  def ask
  end

  def answer
    user_message = params[:answer]
    if user_message == 'I am going to work'
      return @coach_answer = 'Great!'
    elsif user_message.end_with?('?')
      return @coach_answer = 'I am going to work'
    else
      @coach_answer = "I don't care, get dressed and go to work!"

  end
end
