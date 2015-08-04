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
      player_hash = {"firstname" => @players[index].firstname, "score" => @total_scores[index]  }
      @totals_array << player_hash
    end
    render json: {totals_array: @totals_array}

    if @user.admin == true
      render 'users/coaches/dashboard'
    else
      render 'users/players/dashboard'
    end
  end


  def index
    players = User.players.all
    render json: players
  end
end

