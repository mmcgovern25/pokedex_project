class Review < ApplicationRecord
  validates :content, presence: true
  validates :rating, presence: true
  belongs_to :restaurant
end
