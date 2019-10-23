Rails.application.routes.draw do
  devise_for :users
root 'messages#index'
resources :messages, only: [:index]
resources :users, only: [:update, :edit]
resources :groups, only: [:new, :create, :edit, :update, :index]
end
