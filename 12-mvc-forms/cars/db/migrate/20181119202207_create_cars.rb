class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :make 
      t.string :model 
      t.integer :year 
      t.boolean :is_4_wheel_drive 
    end
  end
end
