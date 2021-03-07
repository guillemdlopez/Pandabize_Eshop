class Upsell < ApplicationRecord
    belongs_to :first_customization, class_name: 'Customization'
    belongs_to :second_customization, class_name: 'Customization'
end
