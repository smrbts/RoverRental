class User < ApplicationRecord
    has_secure_password
    
    has_many :walks
    has_many :dogs, through: :walks

    validates :email, presence: true
    validates :password, presence: true
end
