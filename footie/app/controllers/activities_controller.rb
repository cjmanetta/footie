class ActivitiesController < ApplicationController
  def show
    @activity = Activity.find(params[:id])
    render '_show'
  end

  def new
    # @activity = Activity.new dont need this until i show validation errors to user
    render '_new'
  end

  def create
    @activity = Activity.new(activity_params)
    if @activity.save
      redirect_to '/'
    else
      render '_new'
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
