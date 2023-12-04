require "application_system_test_case"

class CowsTest < ApplicationSystemTestCase
  setup do
    @cow = cows(:one)
  end

  test "visiting the index" do
    visit cows_url
    assert_selector "h1", text: "Cows"
  end

  test "should create cow" do
    visit cows_url
    click_on "New cow"

    fill_in "Aggression", with: @cow.aggression
    fill_in "Breed", with: @cow.breed
    fill_in "Calfquality", with: @cow.calfquality
    fill_in "Calving", with: @cow.calving
    fill_in "Dam", with: @cow.dam
    fill_in "Dob", with: @cow.dob
    fill_in "Docility", with: @cow.docility
    fill_in "Fertility", with: @cow.fertility
    fill_in "Milk", with: @cow.milk
    fill_in "Tag", with: @cow.tag
    fill_in "User", with: @cow.user_id
    click_on "Create Cow"

    assert_text "Cow was successfully created"
    click_on "Back"
  end

  test "should update Cow" do
    visit cow_url(@cow)
    click_on "Edit this cow", match: :first

    fill_in "Aggression", with: @cow.aggression
    fill_in "Breed", with: @cow.breed
    fill_in "Calfquality", with: @cow.calfquality
    fill_in "Calving", with: @cow.calving
    fill_in "Dam", with: @cow.dam
    fill_in "Dob", with: @cow.dob
    fill_in "Docility", with: @cow.docility
    fill_in "Fertility", with: @cow.fertility
    fill_in "Milk", with: @cow.milk
    fill_in "Tag", with: @cow.tag
    fill_in "User", with: @cow.user_id
    click_on "Update Cow"

    assert_text "Cow was successfully updated"
    click_on "Back"
  end

  test "should destroy Cow" do
    visit cow_url(@cow)
    click_on "Destroy this cow", match: :first

    assert_text "Cow was successfully destroyed"
  end
end
