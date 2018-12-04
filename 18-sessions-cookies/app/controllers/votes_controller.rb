class VotesController < ApplicationController

  def create
    if @can_vote
      @vote = Vote.create(color_id: params[:color_id])
      cookies["votes"] = cookies["votes"].to_i - 1
    end
    redirect_to colors_path
  end

end

