class CreateTrainers < ActiveRecord::Migration[5.2]
  def change
    create_table :trainer do |t|
      t.string :name
    end
  end
end
