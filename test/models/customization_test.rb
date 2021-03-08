require 'test_helper'

class CustomizationTest < ActiveSupport::TestCase
  def setup
    @bicycle = Bicycle.create!(name: 'Coolest', description: 'Coolest bicycle in the world!')
    @customization = Customization.create!(name: 'wheel size', value: '18 inches', price: 9.5, bicycle_id: @bicycle.id)
  end

  test 'should save it if it passes all validations' do
    assert @customization.valid?
  end

  test 'price should be greater than 0' do
    @customization.price = 0

    assert_not @customization.valid?
  end

  test 'name, value and price should be present' do
    @customization = Customization.new(name: '', value: '', price: '', bicycle_id: @bicycle.id)

    assert_not @customization.valid?
  end
end