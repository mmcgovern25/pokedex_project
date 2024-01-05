class AddUserReferenceToPost < ActiveRecord::Migration[7.0]
  def change
    add__column :Post, :User, :integer
  end
end
