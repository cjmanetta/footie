Rails.application.routes.draw do
  root 'home#index'

  ACCEPTS_JSON = lambda { |request|
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resources :scores, except: [:index]
    resources :activities
    resources :users, only: [:index]
  end

  resources :users, only: [:show]
  get 'scores#*', to: 'home#index'
  # resources :scores, except: [:index]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'

  get '/oauth/initiate', to: 'authorization#initiate_oauth'
  get '/oauth/exchange', to: 'authorization#exchange_oauth'

end
