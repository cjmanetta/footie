class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @players = User.players
    @score = Score.new
    @activities = Activity.all

    if @user.admin == true
      render 'users/coaches/dashboard'
    else
      render 'users/players/dashboard'
    end
  end
end
