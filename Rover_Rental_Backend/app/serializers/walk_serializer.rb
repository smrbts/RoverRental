class WalkSerializer < ActiveModel::Serializer
  belongs_to :user 
  belongs_to :dog
  attributes :id, :user_id, :dog_id, :date, :duration
end
