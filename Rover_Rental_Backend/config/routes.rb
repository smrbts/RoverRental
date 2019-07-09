Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentication#authenticate'
  resources :users, only: [:index, :create, :update, :destroy]
  resources :dogs, only: [:index, :create, :destroy]
  resources :walks, only: [:index, :create, :update, :destroy]
  
end
