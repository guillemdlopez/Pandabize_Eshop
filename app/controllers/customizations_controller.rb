class CustomizationsController < ApplicationController

    def new
        @customization = Customization.new
        authorize @customization
    end

    def create
        @customization = Customization.new(customization_params)
        authorize @customization

        if @customization.save
            flash[:notice] = "New customizations have been added to #{@customization.bicycle.name}🎨"
            redirect_to root_path
        else
            flash.now[:alert] = 'Something went wrong... Perhaps the bicycle already contains that customization'
            render :new
        end
    end

    private

    def customization_params
        params.require(:customization).permit(:name, :value, :price, :bicycle_id)
    end
end
