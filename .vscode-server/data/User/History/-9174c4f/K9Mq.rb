class User < ActiveRecord::Migration[7.0]
  def change
    create_table :Users do |t|
      t.string :username
      t.string :email
      t.timestamps
    end
  end
end
