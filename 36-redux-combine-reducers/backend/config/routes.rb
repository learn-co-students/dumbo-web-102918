Rails.application.routes.draw do
  resources :hogs
  get 'hobbits/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :hobbits

end
