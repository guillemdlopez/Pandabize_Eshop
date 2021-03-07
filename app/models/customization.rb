class Customization < ApplicationRecord
  belongs_to :bicycle

  has_many :purchased_customizations, dependent: :destroy

  has_many :first_customization_associations, foreign_key: :first_customization_id, class_name: 'Upsell'

  has_many :first_customizations, through: :first_customization_associations, source: :second_customization

  has_many :second_customization_associations, foreign_key: :second_customization_id, class_name: 'Upsell'

  has_many :second_customizations, through: :second_customization_associations, source: :first_customization

  validates :name, :value, :price, presence: true
  validates :price, numericality: { greater_than: 0 }

  before_save :capitalize_customization, unless: :customization_already_exists?

  def capitalize_customization
    self.name.capitalize!
    self.value.capitalize!
  end

  def associations
    (first_customizations + second_customizations).flatten.uniq
  end

  def customization_already_exists?
    Customization.find_by(name: self.name, value: self.value, bicycle_id: self.bicycle_id)
  end
end
