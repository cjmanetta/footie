require "uri"
require "net/http"

class AuthorizationController < ApplicationController

  CLIENT_ID = "b0658498e565835f00a92f901ba7ced4c02a2b21cb55ac75b3722062d5140c5f"
  REDIRECT_URI_1 = "http://localhost:3000/oauth/exchange"
  RESPONSE_TYPE = "code"
  CLIENT_SECRET = "979a5f8d0de15e6a1bfcaa236af71c62abb45029112b507957e902c2d892f8c1"
  # REDIRECT_URI_2 = "http://localhost:3000/oauth/finish"

  def initiate_oauth
    redirect_to "https://auth.teamsnap.com/oauth/authorize?client_id=#{CLIENT_ID}&redirect_uri=#{REDIRECT_URI_1}&response_type=#{RESPONSE_TYPE}"
  end

  def exchange_oauth
    auth_code = params[:code]
    url = "https://auth.teamsnap.com/oauth/token?client_id=#{CLIENT_ID}&client_secret=#{CLIENT_SECRET}&redirect_uri=#{REDIRECT_URI_1}&code=#{auth_code}&grant_type=authorization_code"
    response_from_teamsnap = Net::HTTP.post_form(URI(url), {})
    data = JSON.parse(response_from_teamsnap.body)
    session[:access_token] = data["access_token"]
    session[:token_type] = data["token_type"]
    session[:scope] = data["scope"]
    redirect_to root_path
  end


end