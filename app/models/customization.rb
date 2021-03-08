class Customization < ApplicationRecord
  belongs_to :bicycle

  has_many :purchased_customizations, dependent: :destroy

  has_many :first_customization_associations, foreign_key: :first_customization_id, class_name: 'Upsell'

  has_many :first_customizations, through: :first_customization_associations, source: :second_customization

  has_many :second_customization_associations, foreign_key: :second_customization_id, class_name: 'Upsell'

  has_many :second_customizations, through: :second_customization_associations, source: :first_customization

  validate :customization_already_exists?, on: :create
  validates :name, :value, :price, presence: true
  validates :price, numericality: { greater_than: 0 }

  before_save :round_price, :capitalize_customization


  def capitalize_customization
    self.name.capitalize!
    self.value.capitalize!
  end

  def round_price
    self.price.round(2)
  end

  def associations
    (first_customizations + second_customizations).flatten.uniq
  end

  def customization_already_exists?
    if Customization.find_by(name: self.name.capitalize, value: self.value.capitalize, bicycle_id: self.bicycle_id).present?
      errors.add(:value, "That bicycle already has a/an #{self.value} #{self.name}")
    end
  end
end
