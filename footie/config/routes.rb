Rails.application.routes.draw do
  root 'home#index'

  resources :users, only: [:show]

  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#logout'
  delete '/logout', to: 'sessions#logout'

end
