class VotesController < ApplicationController

  # skip_before_action :verify_authenticity_token

  before_action :authenticate, only: [:index]

  def create
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id])
      use_one_vote
    end
    redirect_to colors_path
  end

  def index
    @votes = Vote.all
  end

  def delete
    Vote.delete(params[:id])
  end


end

