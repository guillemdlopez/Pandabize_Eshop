class Api::V1::BicyclesController < ApplicationController
    before_action :set_bicycle, only: [:show]

    def index
    @bicycles = policy_scope(Bicycle).with_attached_photo
    
    
    render json: @bicycles.map { |bicycle|
      bicycle.as_json.merge({ photo: bicycle.photo.service_url, customizations: bicycle.customizations})
    }
    end

    def show
        render json: @bicycle.as_json.merge(photo: @bicycle.photo.service_url, customizations: @bicycle.customizations)
    end

    def create
        @bicycle = Bicycle.new(bicycle_params)
        authorize @bicycle

        if @bicycle.save
            render json: @bicycle
        else
            render json: {error: @bicycle.errors}
        end
    end

    private

    def set_bicycle
        @bicycle = Bicycle.find(params[:id])
        authorize @bicycle
    end

    def bicycle_params
        params.require(:bicycle).permit(:name, :description, :photo)
    end
end
