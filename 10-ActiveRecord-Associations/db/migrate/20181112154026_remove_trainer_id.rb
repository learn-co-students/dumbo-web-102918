class RemoveTrainerId < ActiveRecord::Migration[5.2]
  def change
    remove_column :pokemons, :trainer_id
    remove_column :pokemons, :nickname
  end
end
