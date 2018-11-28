Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "statuses#index"
  resources :statuses, :reactions
end
