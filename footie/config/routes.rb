Rails.application.routes.draw do
  root 'home#index'

  resources :users, only: [:show]
  resources :activities

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'

end
