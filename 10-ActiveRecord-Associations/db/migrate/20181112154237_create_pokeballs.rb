class CreatePokeballs < ActiveRecord::Migration[5.2]
  def change
    create_table :pokeballs do |t|
      t.integer :pokemon_id
      t.integer :trainer_id
      t.string :nickname
    end
  end
end
