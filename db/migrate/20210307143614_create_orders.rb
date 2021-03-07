class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.references :bicycle, null: false, foreign_key: true
      t.float :amount
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
