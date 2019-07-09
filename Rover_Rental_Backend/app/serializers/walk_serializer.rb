class WalkSerializer < ActiveModel::Serializer
  
  attributes :id, :user_id, :dog_id, :date, :duration
end
