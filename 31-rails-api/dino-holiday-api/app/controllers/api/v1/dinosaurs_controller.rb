module Api
  module V1
    class DinosaursController < ApplicationController 

      def index
        @dinosaurs = Dinosaur.all
        render json: @dinosaurs
      end

    end
  end
end