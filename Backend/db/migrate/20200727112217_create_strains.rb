class CreateStrains < ActiveRecord::Migration[6.0]
  def change
    create_table :strains do |t|
      t.string :name
      t.string :notes
      t.belongs_to :list, null: false, foreign_key: true
    end
  end
end
