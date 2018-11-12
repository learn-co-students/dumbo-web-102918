class RenameTrainerToTrainers < ActiveRecord::Migration[5.2]
  def change
    rename_table :trainer, :trainers
  end
end
