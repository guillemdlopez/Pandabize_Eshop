class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :orders, dependent: :destroy
  has_many :purchased_customizations, through: :orders
  has_many :bicycles, through: :orders

  has_one_attached :avatar

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  def full_name
    "#{first_name} #{last_name}"
  end
end
