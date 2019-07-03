# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "rest-client"
require "json"
require "faker"

Dogs.destroy_all

10.times do
    Dog.create(name: Faker::Creature::Dog.name, age: rand(1..10), gender: Faker::Creature::Dog.gender, breed: Faker::Creature::Dog.breed)
end


































