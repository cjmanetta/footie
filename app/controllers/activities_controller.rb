class ActivitiesController < ApplicationController

  def index
    activities = Activity.all
    render json: activities
  end

  def show
    @activity = Activity.find(params[:id])
    render '_show'
  end

  def new
    @activity = Activity.new
  end

  def edit
    @activity = Activity.find(params[:id])
  end

  def create
    @activity = Activity.new(activity_params)
    if @activity.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def update
    @activity = Activity.find(params[:id])
    if @activity.update(activity_params)
      redirect_to @activity
    else
      render 'edit'
    end
  end

  def destroy
    @activity = Activity.find(params[:id])
    @activity.destroy
    redirect_to '/'
  end

  private

  def activity_params
    params.require(:activity).permit(:activity_type, :title, :description, :date)
  end

end


