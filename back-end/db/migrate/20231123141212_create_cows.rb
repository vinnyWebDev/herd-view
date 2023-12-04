class CreateCows < ActiveRecord::Migration[7.0]
  def change
    create_table :cows do |t|
      t.integer :tag
      t.date :dob
      t.integer :dam
      t.string :breed
      t.integer :docility
      t.integer :aggression
      t.integer :fertility
      t.integer :calving
      t.integer :calfquality
      t.integer :milk
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
