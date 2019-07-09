class User < ApplicationRecord

    has_many :walks
    has_many :dogs, through: :walks
end
