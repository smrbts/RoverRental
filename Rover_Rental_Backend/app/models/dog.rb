class Dog < ApplicationRecord
    has_many :walks
    has_many :users, though :walks
  end