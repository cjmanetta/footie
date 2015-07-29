class ScoresController < ApplicationController
  def show
    @score = Score.find(params[:id])
      render '_show'
  end

  def new
    @score = Score.new
  end

  def edit
    @score = Score.find(params[:id])
  end

  def create
    @score = Score.new(score_params)

    if @score.save
      redirect_to '/'
    else
      render 'new'
    end
  end

  def update
    @score = Score.find(params[:id])
    if @score.update(score_params)
      redirect_to @score
    else
      render 'edit'
    end
  end

  def destroy
    @score = Score.find(params[:id])
    @score.destroy
    redirect_to '/'
  end


  private

  def score_params
    params.require(:score).permit(:value, :user_id, :activity_id)
  end

end
