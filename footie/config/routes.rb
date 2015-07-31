Rails.application.routes.draw do
  root 'home#index'

  resources :users, only: [:show]
  resources :activities
  resources :scores, except: [:index]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'

  get '/oauth/initiate', to: 'authorization#initiate_oauth'
  get '/oauth/exchange', to: 'authorization#exchange_oauth'

end
