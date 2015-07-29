class UsersController < ApplicationController
  def show
    # render 'users/coaches/dashboard'
    @user = User.find(params[:id])
    if @user.admin == true
      render 'users/coaches/dashboard'
    else
      render 'users/players/dashboard'
    end
  end
end
