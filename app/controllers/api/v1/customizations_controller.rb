class Api::V1::CustomizationsController < ApplicationController
    before_action :set_customization, only: [:show]

    def index
        @customizations = policy_scope(Customization)

        render json: @customizations
    end

    def show
        render json: {
            bicycle: @customization.bicycle.name,
            bicycle_id: @customization.bicycle.id,
            customization: @customization.name,
            value: @customization.value,
            associations: @customization.associations
        }
        authorize @customization
    end

    def create
        @customization = Customization.new(customization_params)
        authorize @customization
        

        if @customization.save
            render json: @customization
        else
            render json: {error: @customization.errors}
        end
    end

    private

    def set_bicycle
        @bicycle = Bicycle.find(params[:bicycle_id])
    end

    def set_customization
        @customization = Customization.find(params[:id])
    end

    def customization_params
        params.require(:customization).permit(:name, :value, :price, :bicycle_id)
    end
end
