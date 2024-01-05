class Post < ActiveRecord::Base
  belongs_to :user

validates :title, length: { minimum: 5 }
validates :title, uniqueness: true
  # TODO: Add some validation
end
