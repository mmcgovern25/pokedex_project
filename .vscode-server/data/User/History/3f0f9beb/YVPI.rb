class Bookmark < ApplicationRecord
  belongs_to :movies
  belongs_to :lists
  validates :comment, length: { minimum: 6 }
  validates :movie_id, uniqueness: { scope: :list_id }
end
