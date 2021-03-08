require 'test_helper'

class CustomizationControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  def setup
    get new_user_session_path

    sign_in users(:admin_user)
    post user_session_path
  end

  test 'should get the new customizations form only if the user is an admin' do
    get new_customization_path

    assert_response :success
  end

  test 'should not get the new customizations form if the user is not an admin' do
    get new_user_session_path

    sign_in users(:regular_user)
    post user_session_path

    get new_customization_path

    assert_response :redirect
  end

  test 'should get the new bicycles form only if the user is an admin' do
    get new_bicycle_path

    assert_response :success
  end

  test 'should not get the new bicycle form if the user is not an admin' do
    get new_user_session_path

    sign_in users(:regular_user)
    post user_session_path

    get new_bicycle_path

    assert_response :redirect
  end
end
