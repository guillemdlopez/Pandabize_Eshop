require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  setup do
    @bicycle = Bicycle.create!(name: 'Cool', description: 'Coolest bicycle ever!')

    get new_user_session_path
    sign_in users(:admin_user)
    post user_session_url
  end

  test "should get the home page" do
    get root_path

    assert_response :success
  end

  test 'should get the show page' do
    get '/bicycle/:id'

    assert_response :success
  end

  test 'should get the form page to create a new order' do
    get '/bicycle/:id/order'

    assert_response :success
  end

  test 'should get the dashboard' do
    get '/dashboard'

    assert_response :success
  end
end
