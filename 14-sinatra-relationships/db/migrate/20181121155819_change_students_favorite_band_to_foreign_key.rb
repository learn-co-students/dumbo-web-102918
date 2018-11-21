class ChangeStudentsFavoriteBandToForeignKey < ActiveRecord::Migration
  def change
    add_column :students, :favorite_band_id, :integer
    remove_column :students, :favorite_band, :string
  end
end
