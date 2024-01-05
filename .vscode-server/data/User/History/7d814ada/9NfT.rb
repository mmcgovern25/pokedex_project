class AddColumnsToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :votes, :integer, default: 0, null: false
  end
end
