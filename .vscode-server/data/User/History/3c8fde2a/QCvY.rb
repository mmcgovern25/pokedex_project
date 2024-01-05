class User < ActiveRecord::Base
  def change
    create_table :Users do |t|
      t.string      :username
      t.string      :email
      t.timestamps
    end
  end
end
