class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string "name"
      t.integer "age"
      t.string "gender"
      t.string "breed"
      t.timestamps
    end
  end
end
