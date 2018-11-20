class StudentsController < ApplicationController
  get "/students" do
    @students = Student.all
    erb :index
  end

  get "/students/new" do
    erb :new
  end

  post '/students' do
    @student = Student.create(params)
    # redirect to "/students/#{@student.id}"
    redirect to "/students"
  end

  get '/students/:id' do
    @student = Student.find(params[:id])
    erb :show
  end


end
