require 'test_helper'

class CustomizationControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  def setup
    @bicycle = Bicycle.create!(name: 'Black Panther', description: 'Black Panther will take you anywhere in less than a second! Feel the Panther!')

    get new_user_session_path

    sign_in users(:admin_user)
    post user_session_path
  end

  test 'should get the new only if the user is an admin' do
    get new_customization_path

    assert_response :success
  end

  test 'should not get the new if the user is not an admin' do
    get new_user_session_path

    sign_in users(:regular_user)
    post user_session_path

    get new_customization_path

    assert_response :redirect
  end

  test 'should create a new customization' do
    assert_difference('Customization.count', 1) do
      post customizations_path, params: {customization: {name: 'wheel size', value: '16 inches', price: 9.35, bicycle_id: @bicycle.id}}
    end

    assert_redirected_to root_path
  end
end
