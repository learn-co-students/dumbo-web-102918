class Dinosaur < ApplicationRecord


  has_many :parties
  has_many :holidays, through: :parties


  # def to_json
  #   {
  #     id: self.id,
  #     name: self.name,
  #     is_vegan: self.is_vegan
  #   }
  # end

end
