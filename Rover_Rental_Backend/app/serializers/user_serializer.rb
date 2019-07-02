class UserSerializer < ActiveModel::Serializer
  has_many :walks
  has_many :dogs, through: :walks
  attributes :id, :email, :password_digest
end
