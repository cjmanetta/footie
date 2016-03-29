require 'json'
# id: action.id,
#         value: action.value,
#         player: action.player,
#         challenge: action.challenge
class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @players = User.players
    @score = Score.new
    @activities = Activity.all
    @scores = []

    @players.each do |player|
      players_hash = { 
        "name" => player.firstname,
        "scores" => player.scores.map {|score| {
          "id" => score.id, 
          "value" => score.value, 
          "challenge" => Activity.challenges.find(score.activity_id).id
        }}
      }


      # player_hash = {"firstname" => player.firstname, "scores" => player.scores., "photo" => player.profile_photo }
      @scores << players_hash
    end

    gon.user_id = @user.id


    if request.xhr?
      render json: { scores: @scores }
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

