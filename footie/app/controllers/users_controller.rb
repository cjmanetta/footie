class UsersController < ApplicationController
  def show
    # render 'users/coaches/dashboard'
    @user = User.find(params[:id])
    @players = User.players
    # @scores = @players.scores
    if @user.admin == true
      render 'users/coaches/dashboard'
    else
      render 'users/players/dashboard'
    end
  end
end
