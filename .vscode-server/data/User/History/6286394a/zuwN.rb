class Post < ActiveRecord::Base
  belongs_to :user

validates :title, length: { minimum: 5 }
  # TODO: Add some validation
end
