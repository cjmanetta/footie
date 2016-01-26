require 'json'

class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @players = User.players
    @score = Score.new
    @activities = Activity.all
    @totals_array = []
    @total_scores = @players.map {|player| player.total_score}

    @players.each_with_index do |player, index|
      p player.profile_photo
      player_hash = {"firstname" => player.firstname, "score" => @total_scores[index], "photo" => player.profile_photo }
      @totals_array << player_hash
    end

    gon.user_id = @user.id


    if request.xhr?
      render json: { scores: @totals_array }
    else
      if @user.admin == true
        render 'users/coaches/dashboard'
      else
        render 'users/players/dashboard'
      end
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to user_path(current_user)
    else
      render root
    end
  end

  def index
    @users = User.all
    players = User.players.all
    render json: players
  end

  private

  def user_params
    params.require(:user).permit(:firstname, :lastname, :birthdate, :email, :admin, :username, :password_digest)
  end
end

