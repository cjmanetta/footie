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

    gon.user_id = @user.id


    if request.xhr?
      p 'x' *100
      p "xhr"
      p 'x' *100
      render json: { scores: @totals_array }
    else
      if @user.admin == true
      p 'x' *100
      p "for user dashboard"
      p 'x' *100
        render 'users/coaches/dashboard'
      else
        render 'users/players/dashboard'
      end
    end
  end


  def index
    players = User.players.all
    render json: players
  end
end

