Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
     resources :todos, only: [:index, :create, :destroy, :update]
     resources :categories, only: [:index, :create, :destroy, :update]
    end
  end
end
