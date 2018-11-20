require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get '/cars' do
    @search_term = params[:q]
    @cars = Car.search(@search_term)
    erb :index
  end

end
