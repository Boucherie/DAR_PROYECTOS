require 'csv'
require 'json'
class ArtisansController < ApplicationController

  def index
    respond_to do |format|
      format.html {
        render :index
      }

      format.json {
        render json: CSV.open(Rails.root.join('db', 'tembla_capacity.csv'), :headers => true).map { |x| x.to_h }.to_json
        # CSV.foreach(Rails.root.join('db', 'tembla_capacity.csv')) do |row|
        #   puts row
          # use row (rails helper)
        # end
      }
    end
  end
end
