require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  
  setup do
    @user = User.create!(first_name: 'Guillem', last_name: 'Delás', email: 'guillemdelas@hotmail.com', password: '123456')
    @bicycle = Bicycle.create!(name: 'Prettiest', description: 'prettiest bicycle in the planet!')
    @order = Order.create!(user_id: @user.id, bicycle_id: @bicycle.id, amount: 2)
  end

  test 'should save it if it passes all the validations' do
    assert @order.valid?
  end

  test 'amount should be greater than 0' do
    @order.amount = 0

    assert_not @order.valid?
  end

  test 'amount should be present' do
    @order.amount = ''
    assert_not @order.valid?
  end
end
