class CreateWalks < ActiveRecord::Migration[5.2]
  def change
    create_table :walks do |t|
      t.integer "user_id"
      t.integer "dog_id"
      t.date "date"
      t.integer "duration"

      t.timestamps
    end
  end
end
