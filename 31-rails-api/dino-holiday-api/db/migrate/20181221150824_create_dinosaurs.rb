class CreateDinosaurs < ActiveRecord::Migration[5.2]
  def change
    create_table :dinosaurs do |t|
      t.string :name
      t.boolean :has_sharp_teeth
      t.boolean :is_vegan

      t.timestamps
    end
  end
end
