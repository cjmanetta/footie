require "uri"
require "net/http"

class AuthorizationController < ApplicationController


  def initiate_oauth
    redirect_uri = "http://localhost:3000/oauth/exchange"
    redirect_to "https://auth.teamsnap.com/oauth/authorize?client_id=#{ENV['CLIENT_ID']}&redirect_uri=#{redirect_uri}&response_type=code"
  end

  def exchange_oauth
    auth_code = params[:code]
    redirect_uri = "http://localhost:3000/users#{current_user.id}"
    url = "https://auth.teamsnap.com/oauth/token?client_id=#{ENV['CLIENT_ID']}&client_secret=#{ENV['CLIENT_SECRET']}&redirect_uri=#{redirect_uri}&code=#{auth_code}&grant_type=authorization_code"
    response_from_teamsnap = Net::HTTP.post_form(URI(url), {})
    data = JSON.parse(response_from_teamsnap.body)
    session[:access_token] = data["access_token"]
    session[:token_type] = data["token_type"]
    session[:scope] = data["scope"]

    redirect_to user_path(current_user.id)
  end


end