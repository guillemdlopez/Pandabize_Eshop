class PurchasedCustomization < ApplicationRecord
  belongs_to :order
  belongs_to :customization
end
