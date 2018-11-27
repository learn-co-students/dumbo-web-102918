class CatsController < ApplicationController
  # this runs before every method and calls
  # the private method find_cat at the bottom of
  # this file and finds and assigns @cat
  before_action :find_cat, only: [:show, :edit, :update, :destroy]
  # only: [] runs  this method only before the specified controller methods

  def index
    @cats = Cat.all
  end

  def show
    # don't need this anymore because of the before_action
    # @cat = Cat.find(params[:id])
  end

  def new
    @cat = Cat.new
  end

  def create
    @cat = Cat.create(cat_params)
    # check to see if this is a valid cat
    if @cat.valid?
      # if it's valid, go the that cat's show page
      redirect_to @cat
    else
      # if the cat isn't valid, put it's errors inside of the
      # flash hash under the key :error and redirect back to the new path
      flash[:error] = @cat.errors.full_messages
      redirect_to new_cat_path(@cat)
    end
  end

  def edit
    # don't need this anymore because of the before_action
    # @cat = Cat.find(params[:id])
  end

  def update
    # @cat = Cat.update(cat_params)
    # don't need this anymore because of the before_action
    # @cat = Cat.find(params[:id])
    @cat.update(cat_params)

    # check to see if this is a valid cat
    if @cat.valid?
      # if it's valid, go the that cat's show page
      redirect_to @cat
    else
      # if the cat isn't valid, put it's errors inside of the 
      # flash hash under the key :error and redirect back to the edit path
      flash[:error] = @cat.errors.full_messages
      redirect_to edit_cat_path(@cat)
    end
  end

  def destroy
    # don't need this anymore because of the before_action
    # @cat = Cat.find(params[:id])
    @cat.destroy

    redirect_to cats_path
  end

  private

  def cat_params
    params.require(:cat).permit(:name, :aggression)
  end

  # This is a way to always find the cat you need
  # you don't have to Cat.find over and over now

  def find_cat
    @cat = Cat.find(params[:id])
  end

end
