class SessionsController < ApplicationController
  def create
    @user = User.where(username: params[:username]).first
    if @user && @user.authenticate(params[:password])
      login_user(@user)
      redirect_to @user
    else
      redirect_to '/'
    end
  end

  def delete
    session[:user_id] = nil
    redirect_to '/'
  end

end
