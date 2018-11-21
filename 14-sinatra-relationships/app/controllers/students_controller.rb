class StudentsController < ApplicationController
  get "/students" do
    @students = Student.all
    erb :"students/index"
  end

  get "/students/new" do
    @student = Student.new
    erb :"students/new"
  end

  post '/students' do
    @student = Student.create(params[:student])
    # redirect to "/students/#{@student.id}"
    redirect to "/students"
  end

  get '/students/:id' do
    fetch_student
    erb :"students/show"
  end

  #edit
  get "/students/:id/edit" do
    @student_id = params[:id]
    fetch_student
    erb :"students/edit"
  end


 #  {"name"=>"Omar",
 # "age"=>"25",
 # "favorite_band"=>"Metallica",
 # "favorite_movie"=>"Braveheart",
 # "id"=>"34"
 #  "_method"=> "PATCH"}

   # {
   #  "student" => {
   #     "name"=>"Omar",
   #     "age"=>"25",
   #     "favorite_band"=>"Metallica",
   #     "favorite_movie"=>"Braveheart"
   #  },
   #   "id"=>"34",
   #   "_method"=> "PATCH"
   # }


  patch "/students/:id" do
    fetch_student
    # params.delete("_method")
    @student.update(params[:student])
    redirect to "/students/#{@student.id}"
  end

  delete '/students/:id' do
    fetch_student
    @student.destroy
    redirect to "/students"
  end

  def fetch_student
    @student = Student.find(params[:id])
  end

 
end
