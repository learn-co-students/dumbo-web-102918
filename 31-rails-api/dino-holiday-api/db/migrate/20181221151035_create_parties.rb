class CreateParties < ActiveRecord::Migration[5.2]
  def change
    create_table :parties do |t|
      t.references :dinosaur, foreign_key: true
      t.references :holiday, foreign_key: true

      t.timestamps
    end
  end
end
