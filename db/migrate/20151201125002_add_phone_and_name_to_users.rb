class AddPhoneAndNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :phone_number, :integer
    add_column :users, :full_name, :string
  end
end
