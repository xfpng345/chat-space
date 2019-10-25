Rails.application.routes.draw do
  devise_for :users
root 'groups#index'
resources :users, only: [:update, :edit]
resources :groups, only: [:new, :create, :edit, :update, :index] do
  resources :messages, only: [:index]
end
end
