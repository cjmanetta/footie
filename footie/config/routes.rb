Rails.application.routes.draw do
  root 'home#index'

  resources :users, only: [:show]
  resources :activities
  resources :scores, except: [:index]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'

end
