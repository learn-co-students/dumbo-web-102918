class Cat < ApplicationRecord
  # protect our app from making a cat with a blank name
  # also protect our app from making the same cat names
  validates :name, { presence: true, uniqueness: true }
  # protect our app from making a cat with a blank aggression level
  validates :aggression, presence: true
end
