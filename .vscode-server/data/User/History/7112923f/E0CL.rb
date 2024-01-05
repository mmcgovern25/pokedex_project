class User < ActiveRecord::Base
  has_many :posts
    validates :Email
    validates :username, uniqueness: true
  end
  # TODO: Add some validation
  # TODO: Add some callbacks
end
