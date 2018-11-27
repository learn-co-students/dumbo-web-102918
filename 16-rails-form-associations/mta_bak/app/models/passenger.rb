class Passenger < ApplicationRecord
  belongs_to :train
  validates :name, { presence: true, uniqueness: true }
end
