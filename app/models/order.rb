class Order < ApplicationRecord
  belongs_to :bicycle
  belongs_to :user

  belongs_to :bicycle
  belongs_to :user

  has_many :purchased_customizations, dependent: :destroy
  has_many :customizations, through: :purchased_customizations

  validates :amount, presence: true
  validates :amount, numericality: { greater_than: 0 }
end
