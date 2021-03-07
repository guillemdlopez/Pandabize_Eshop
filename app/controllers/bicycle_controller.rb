class BicyclesController < ApplicationController
    before_action :set_bicycle, only: [:show]

    def new
        @bicycle = Bicycle.new()
        authorize @bicycle
    end

    def create
        @bicycle = Bicycle.new(bicycle_params)
        authorize @bicycle

        if @bicycle.save
            flash[:notice] = "You added a new bicycle to your stock #{@bicycle.name}🚲"
            redirect_to bicycle_show_path(@bicycle)
        else
            render 'new'
        end
    end

    def show
        render json: {
            bicycle: @bicycle,
            customizations: @bicycle.customizations,
        }
    end

    private

    def bicycle_params
        params.require(:bicycle).permit(:name, :description, :photo)
    end

    def set_bicycle
        @bicycle = Bicycle.find(params[:id])
        authorize @bicycle
    end
end
