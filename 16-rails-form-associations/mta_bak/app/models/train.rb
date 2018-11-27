class Train < ApplicationRecord
  has_many :passengers, dependent: :destroy
  validates :name, { presence: true, uniqueness: true }
end
