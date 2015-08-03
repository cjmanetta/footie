class SessionsController < ApplicationController
  def create
    @user = User.where(username: params[:username]).first
    if @user && @user.authenticate(params[:password])
      login_user(@user)
      redirect_to oauth_initiate_path
    else
      redirect_to root_path
    end
  end

  def delete
    session[:user_id] = nil
    redirect_to root_path
  end

end
