class UsersController < ApplicationController

  def new
    @user = User.new
  end


  def create
    # byebug
    
    # bcrypt the password
    # @password_digest = BCrypt::Password.create(user_params[:password])
    # @user = User.new
    # @user.username = user_params[:username]
    # @user.password_digest = @password_digest
    # # save to the database
    # @user.save

    # @user = User.create({ username: user_params[:username], 
    #   password_digest: BCrypt::Password.create(user_params[:password]) })
    
    @user = User.create(user_params)


    # redirect to homepage
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end