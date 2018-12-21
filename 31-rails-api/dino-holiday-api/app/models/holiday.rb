class Holiday < ApplicationRecord
  has_many :parties
  has_many :dinosaurs, through: :parties
end
