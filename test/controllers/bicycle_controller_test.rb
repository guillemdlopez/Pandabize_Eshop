require 'test_helper'

class BicycleControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  def setup 
    get new_user_session_path

    sign_in users(:admin_user)
    post user_session_path
  end

  test 'should get the new only if the user is an admin' do
    get new_bicycle_path

    assert_response :success
  end

  test 'should not get the new if the user is not an admin' do
    get new_user_session_path

    sign_in users(:regular_user)
    post user_session_path

    get new_bicycle_path

    assert_response :redirect
  end

  test 'should create a new bicycle' do
    assert_difference('Bicycle.count', 1) do
      post bicycles_path, params: {bicycle: {name: 'Black Panther', description: 'Black Panther will take you anywhere in less than a second! Feel the Panther!'}}
    end

    assert_response :redirect
  end

  
end
