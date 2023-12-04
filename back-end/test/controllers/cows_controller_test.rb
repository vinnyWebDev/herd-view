require "test_helper"

class CowsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cow = cows(:one)
  end

  test "should get index" do
    get cows_url
    assert_response :success
  end

  test "should get new" do
    get new_cow_url
    assert_response :success
  end

  test "should create cow" do
    assert_difference("Cow.count") do
      post cows_url, params: { cow: { aggression: @cow.aggression, breed: @cow.breed, calfquality: @cow.calfquality, calving: @cow.calving, dam: @cow.dam, dob: @cow.dob, docility: @cow.docility, fertility: @cow.fertility, milk: @cow.milk, tag: @cow.tag, user_id: @cow.user_id } }
    end

    assert_redirected_to cow_url(Cow.last)
  end

  test "should show cow" do
    get cow_url(@cow)
    assert_response :success
  end

  test "should get edit" do
    get edit_cow_url(@cow)
    assert_response :success
  end

  test "should update cow" do
    patch cow_url(@cow), params: { cow: { aggression: @cow.aggression, breed: @cow.breed, calfquality: @cow.calfquality, calving: @cow.calving, dam: @cow.dam, dob: @cow.dob, docility: @cow.docility, fertility: @cow.fertility, milk: @cow.milk, tag: @cow.tag, user_id: @cow.user_id } }
    assert_redirected_to cow_url(@cow)
  end

  test "should destroy cow" do
    assert_difference("Cow.count", -1) do
      delete cow_url(@cow)
    end

    assert_redirected_to cows_url
  end
end
