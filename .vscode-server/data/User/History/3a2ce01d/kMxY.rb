Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :properties, only: %i[index new create edit update destroy] do
    resources :jobs, only: %i[index show new create]
    resources :cleaners, only: %i[create destroy]
  end

  resources :jobs %i[index show] do
    resources :japplications %i[create update]
    resources :reviews %i[create]
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
