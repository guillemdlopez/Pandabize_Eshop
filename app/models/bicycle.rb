class Bicycle < ApplicationRecord
    has_many :customizations, dependent: :destroy
    has_many :orders, dependent: :destroy
    has_many :users, through: :orders

    validates :name, :description, presence: true
    validates :name, length: {minimum: 4}
    validates :description, length: {minimum: 20, maximum: 230}
    validates :name, :description, uniqueness: true

    has_one_attached :photo
end
