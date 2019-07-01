class DogsController < ApplicationController

    before_action :find_dog, only: [:update, :destroy]

    def index
      @dogs = Dog.all
      render json: @dogs
    end

    def create
      @dog = Dog.new(dog_params)
      if @dog.save
        render json: @dog, status: :accepted
      else
        render json: { errors: @dog.errors.full_messages }, status: :unprocessible_entity
      end
    end

    def update
      @dog.update(dog_params)
      if @dog.save
        render json: @dog, status: :accepted
      else
        render json: { errors: @dog.errors.full_messages }, status: :unprocessible_entity
      end
    end

    def destroy
      @dog.destroy
      render json: @dogs
    end
  
    private
   
    def dog_params
      params.permit(:id, :name, :age, :gender, :breed)
    end
   
    def find_dog
      @dog = Dog.find(params[:id])
    end
    
end
