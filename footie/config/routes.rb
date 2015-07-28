Rails.application.routes.draw do
  root 'home#index'

  delete '/logout', to: 'sessions#delete'
  resources :users, only: [:show]

  post '/login', to: 'sessions#create'

end
