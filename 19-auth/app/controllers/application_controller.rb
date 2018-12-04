class ApplicationController < ActionController::Base

  before_action :setup_voting_attrs

  def setup_voting_attrs
    cookies["votes"] ||= 5
    @votes = cookies["votes"].to_i
    @can_vote = @votes > 0
  end

end