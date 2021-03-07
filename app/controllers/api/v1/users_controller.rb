class Api::V1::UsersController < ApplicationController
    before_action :find_user, only: [:show]
    def index
        @users = policy_scope(User.all)

        render json: @users.map {|user| user.as_json.merge({avatar: user.avatar.service_url, orders: user.orders})} 
    end

    def show
        authorize @user

        render json: {
            user: @user.as_json.merge({avatar: @user.avatar.service_url}),
            orders: @user.orders.map {|order| order.as_json.merge(bicycle: order.bicycle.name, photo: order.bicycle.photo.service_url, customizations: order.customizations, )}
        }
    end

    private
    def find_user
        @user = User.find(params[:id])
    end
end
