class CreatePurchasedCustomizations < ActiveRecord::Migration[6.0]
  def change
    create_table :purchased_customizations do |t|
      t.references :order, null: false, foreign_key: true
      t.references :customization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
