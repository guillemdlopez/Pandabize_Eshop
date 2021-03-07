require 'test_helper'

class BicycleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def setup
    @bicycle = Bicycle.create!(name: 'Best Bicycle', description: 'This is the best bicycle in the world! SUPER FAST, SUPER BEUTIFUL, SUPER EVERYTHING! (and super expensive...)')
  end

  test 'should save it if it passes all validations' do
    assert @bicycle.valid?
  end

  test 'name should have a minimum length of 4 characters' do
    @bicycle.name = 'a' * 3

    assert_not @bicycle.valid?
  end

  test 'description should have a minimum length of 20 characters' do
    @bicycle.description = 'a' * 19

    assert_not @bicycle.valid?
  end

  test 'description should have a maximum length of 230 characters' do
    @bicycle.description = 'a' * 231

    assert_not @bicycle.valid?
  end

  test 'name and description should be unique' do
    @bicycle_2 = Bicycle.create(name: 'Best Bicycle', description: 'This is the best bicycle in the world! SUPER FAST, SUPER BEUTIFUL, SUPER EVERYTHING! (and super expensive...)')

    assert_not @bicycle_2.valid?
  end
end
