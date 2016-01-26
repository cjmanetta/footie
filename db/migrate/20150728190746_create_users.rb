class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :birthdate
      t.string :email
      t.boolean :admin, default: false
      t.string :username
      t.string :password_digest
      t.string :profile_photo

      t.timestamps null: false
    end
  end
end
