require 'csv'
require 'json'
class ArtisansController < ApplicationController

  def index
    respond_to do |format|
      format.html {
        render :index
      }

      # format.json {
      #   render json: CSV.open(Rails.root.join('db', 'tembla_capacity.csv'), :headers => true).map { |x| x.to_h }.to_json
      #   # CSV.foreach(Rails.root.join('db', 'tembla_capacity.csv')) do |row|
      #   #   puts row
      #     # use row (rails helper)
      #   # end
      # }
      format.json {
        csv = CSV.open(Rails.root.join('db', 'winter-2018-order.csv'), :headers => true)
        render json:
          csv
          .map {|row| row.to_h }
          .map { |hash|
            {
              id: hash['name'].parameterize.gsub('-','_'),
              data: hash
            }
          }

          # .merge( {id: hash['name'].parameterize.gsub('-','_') } ) }
        # render json: CSV.open(Rails.root.join('db', 'winter-2018-order.csv'), :headers => true)

        # .map { |x| x.to_h }.map{|hash|
          # hash['id'] =     [hash['code'].parameterize.gsub('-','_'), hash].merge({id: })}
        # render json: CSV.open(Rails.root.join('db', 'winter-2018-order.csv'), :headers => true).map { |x| x.to_h }.map {|hash| }.to_h

        # CSV.foreach(Rails.root.join('db', 'tembla_capacity.csv')) do |row|
        #   puts row
          # use row (rails helper)
        # end
      }
    end
  end
end
