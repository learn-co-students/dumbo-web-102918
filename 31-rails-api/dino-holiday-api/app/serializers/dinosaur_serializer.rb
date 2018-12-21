class DinosaurSerializer < ActiveModel::Serializer
  attributes :id, :name, :has_sharp_teeth
  has_many :holidays
end