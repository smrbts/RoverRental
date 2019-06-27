class DogSerializer < ActiveModel::Serializer
  has_many :walks
  has_many :users, through :walks
  attributes :id, :name, :age, :gender, :breed
end
