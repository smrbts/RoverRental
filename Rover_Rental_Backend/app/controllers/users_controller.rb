class UsersController < ApplicationController

    before_action :find_user, only: [:update, :destroy]

    def index
      @users = User.all
      render json: @users
    end

    def create
      @user = User.new(user_params)
      if @user.save
        render json: @user, status: :accepted
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
      end
    end

    def update
      @user.update(note_params)
      if @user.save
        render json: @user, status: :accepted
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
      end
    end

    def destroy
      @user.destroy
      render json: @users
    end
  
    private
   
    def user_params
      params.permit(:id, :name, :address, :phone, :email)
    end
   
    def find_user
      @user = User.find(params[:id])
    end

  end
