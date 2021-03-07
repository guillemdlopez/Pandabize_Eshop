class CustomizationPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show?
    return true
  end

  def create?
    user.admin?
  end

  # def new?
  #   create?
  # end
end
