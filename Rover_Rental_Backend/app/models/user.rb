class User < ApplicationRecord
    has_secure_password
    
    has_many :walks
    has_many :dogs, through: :walks
end