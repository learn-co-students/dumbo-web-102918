class Student < ActiveRecord::Base
  belongs_to :favorite_band, class_name: "Band" 
end
