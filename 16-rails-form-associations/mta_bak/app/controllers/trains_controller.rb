class TrainsController < ApplicationController
  before_action :find_train, only: [:show, :edit, :update, :destroy]
  def index
    @trains = Train.all
  end

  def show
  end

  def new
    @train = Train.new
  end

  def create
    @train = Train.create(train_params)

    if @train.valid?
      redirect_to @train
    else
      flash[:error] = @train.errors.full_messages
      redirect_to new_train_path(@train)
    end
  end

  def edit
  end

  def update
    @train.update(train_params)

    if @train.valid?
      redirect_to @train
    else
      flash[:error] = @train.errors.full_messages
      redirect_to edit_train_path(@train)
    end
  end

  def destroy
    @train.destroy

    redirect_to trains_path
  end

  private

  def find_train
    @train = Train.find(params[:id])
  end

  def train_params
    params.require(:train).permit(:name)
  end
end
