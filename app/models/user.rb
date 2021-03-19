class User < ApplicationRecord
  has_many :orders, dependent: :destroy
  has_many :purchased_customizations, through: :orders
  has_many :bicycles, through: :orders

  has_one_attached :avatar

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  validates :first_name, :last_name, presence: true
  
  def full_name
    "#{first_name} #{last_name}"
  end
end
