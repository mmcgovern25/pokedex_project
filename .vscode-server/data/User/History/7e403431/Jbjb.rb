class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :table do |t|
      t.string    :title
      t.string    :url_string
      t.timestamps
    end
  end
end
          #"title"
          # a url string
          # created_at and updated_at timestamps
    # TODO: your code here to create the posts table
  end
end
