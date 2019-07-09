Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/login', to: 'authentication#create'
  get'/profile', to: 'users#profile'
  resources :users, only: [:create]
  resources :dogs, only: [:index, :create, :destroy]
  resources :walks, only: [:index, :create, :update, :destroy]
  
end
