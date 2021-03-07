class Api::V1::OrdersController < ApplicationController
    before_action :find_order, only: [:show]

    def index
        @orders = policy_scope(Order.all)

        render json: @orders
    end

    def show
        authorize @order

        render json: {
            order: @order,
            customizations: @order.customizations,
        }
    end

    def create
        @order = Order.new(order_params)
        authorize @order

        if @order.save
            render json: @order
        else
            render json: {error: @order.errors}
        end
    end

    private

    def find_order 
        @order = Order.find(params[:id])
    end

    def order_params
        params.require(:order).permit(:bicycle_id, :user_id, :amount, customization_ids: [])
    end
end
