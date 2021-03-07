class CreateUpsells < ActiveRecord::Migration[6.0]
  def change
    create_table :upsells do |t|
      t.integer :first_customization_id
      t.integer :second_customization_id

      t.timestamps
    end
  end
end
