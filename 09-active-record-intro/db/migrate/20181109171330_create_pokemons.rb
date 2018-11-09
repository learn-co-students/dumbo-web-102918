class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :color
      t.string :move
      t.boolean :fainted
    end
  end
end
