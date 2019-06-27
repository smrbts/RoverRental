class UserSerializer < ActiveModel::Serializer
  has_many :walks
  attributes :id, :name, :address, :phone, :address
end
