class WalksController < ApplicationController
    
    before_action :find_walk, only: [:update, :destroy]

    def index
      @walks = walk.all
      render json: @walks
    end

    def create
      @walk = walk.new(walk_params)
      if @walk.save
        render json: @walk, status: :accepted
      else
        render json: { errors: @walk.errors.full_messages }, status: :unprocessible_entity
      end
    end

    def update
      @walk.update(note_params)
      if @walk.save
        render json: @walk, status: :accepted
      else
        render json: { errors: @walk.errors.full_messages }, status: :unprocessible_entity
      end
    end

    def destroy
      @walk.destroy
      render json: @walks
    end
  
    private
   
    def walk_params
      params.permit(:id, :user_id, :dog_id, :date, :duration)
    end
   
    def find_walk
      @walk = walk.find(params[:id])
    end
    
end
