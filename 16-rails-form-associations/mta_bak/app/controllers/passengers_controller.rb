class PassengersController < ApplicationController
  before_action :find_passenger, only: [:show, :edit, :update, :destroy]
  def index
    @passengers = Passenger.all
  end

  def show
  end

  def new
    @passenger = Passenger.new
    @trains = Train.all
  end

  def create
    @passenger = Passenger.create(passenger_params)
    if @passenger.valid?
      redirect_to @passenger
    else
      flash[:error] = @passenger.errors.full_messages
      redirect_to new_passenger_path(@passenger)
    end
  end

  def edit
    @trains = Train.all
  end

  def update
    @passenger.update(passenger_params)

    if @passenger.valid?
      redirect_to @passenger
    else
      flash[:error] = @passenger.errors.full_messages
      redirect_to edit_passenger_path(@passenger)
    end
  end

  def destroy
    @passenger.destroy

    redirect_to passengers_path
  end

  private

  def find_passenger
    @passenger = Passenger.find(params[:id])
  end

  def passenger_params
    params.require(:passenger).permit(:name, :train_id)
  end
end
