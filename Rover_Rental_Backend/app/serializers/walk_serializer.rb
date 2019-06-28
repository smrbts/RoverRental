class WalkSerializer < ActiveModel::Serializer
  belongs_to :user, :dog
  attributes :id, :user_id, :dog_id, :date, :duration
end
