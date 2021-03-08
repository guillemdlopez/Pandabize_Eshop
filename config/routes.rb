Rails.application.routes.draw do
  devise_for :users
  
  root 'pages#home'
  get 'bicycle/:id', to: 'pages#home', as: :bicycle_show
  get 'bicycle/:id/order', to: 'pages#home', as: :bicycle_form
  get 'dashboard', to: 'pages#home', as: :dashboard

  resources :bicycles, only: [:new, :create]

  resources :customizations, only: [:new, :create]
  #API
  namespace :api, defaults: {format: :json} do
    namespace :v1 do 
       resources :bicycles, only: [:index, :show, :create] do
        resources :customizations, only: [:create]
       end
       resources :customizations, only: [:index, :show]

       resources :users, only: [:index, :show]
       resources :orders, only: [:index, :show, :create]
    end
  end
end
