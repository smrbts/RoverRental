class User < ApplicationRecord
    has_secure_password
    
    validates :username, uniqueness: {case_sensitive: false}
    has_many :walks
    has_many :dogs, through: :walks
end
