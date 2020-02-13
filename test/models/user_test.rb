require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.create(lname: 'Smith', fname: 'Bob', email: 'liveswithmom@bobsmith.com', thumbnail: 'mypic.jpg')
  end

  test 'user must be valid' do
    assert @user.valid?
  end

  test 'last name must be present' do
    @user.lname = ''
    assert_not @user.valid?
  end

  test 'first name must be present' do
    @user.fname = ''
    assert_not @user.valid?
  end

  test 'email must be present' do
    @user.email = nil
    assert_not @user.valid?
  end

  test 'email must be unique' do
    user2 = User.create(lname: 'Smith', fname: 'Bob',
                        email: 'liveswithmom@bobsmith.com',
                        thumbnail: 'mypic.jpg')
    assert_not user2.valid?
  end

  test 'email must be a valid format' do
    invalid_emails = [ "somethingmail",  "a" * 300 + "@sample.com", "sample@" + "d" * 253 + ".com"]
    invalid_emails.each do |is|
      @user.email = is
      assert_not @user.valid?, "#{is} should be invalid"
    end
  end

  test 'thumbnail must end with either .png, .jpg, or .gif' do
    invalid_thumbnails = ["something.com", "something@jpg", "photo.txt", "photo."]
    invalid_thumbnails.each do |is|
      @user.thumbnail = is
      assert_not @user.valid?, "#{is} should be not save without .png, .jpg, or .gif ending"
    end
  end

  test 'thumbnail should be a .png, .jpg, or .gif' do
    valid_thumbnails = ["photo.png", "photo.jpg", "pic.gif", "photos/pic.png"]
    valid_thumbnails.each do |is|
      @user.thumbnail = is
      assert @user.valid?, "#{is} should pass validation and save"
    end
  end

  test 'thumbnail can be blank' do
    valid_thumbnail = ["", nil]
    valid_thumbnail.each do |is|
      begin
        @user.thumbnail = is
        assert true
      rescue
        assert false, "#{is} should be invalid"
      end
    end
  end
end
