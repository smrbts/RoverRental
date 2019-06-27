class DogSerializer < ActiveModel::Serializer
  has_many :walks
  attributes :id, :name, :age, :gender, :breed
end
