class Band < ActiveRecord::Base
  has_many :students, foreign_key: "favorite_band_id"
end