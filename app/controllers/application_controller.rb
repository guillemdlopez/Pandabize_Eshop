class ApplicationController < ActionController::Base
    before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?
    skip_before_action :verify_authenticity_token
    
    include Pundit

    after_action :verify_authorized, except: :index, unless: :skip_pundit?
    after_action :verify_policy_scoped, only: :index, unless: :skip_pundit?

    rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

    private

    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :photo])
    end

    def user_not_authorized
        flash[:alert] = 'You are not authorized to perform that action'

        redirect_to root_path
    end
    
    def skip_pundit?
        devise_controller? || params[:controller] =~ /(^(rails_)?admin)|(^pages$)/
    end
end
