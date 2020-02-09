require 'test_helper'

class BugTest < ActiveSupport::TestCase
  def setup
    @bug = Bug.create(title: "Moth in the server", description: "There is a moth in the server.  There are so many bugs in this computer.",
                      issue_type: 0, priority: 3, status: 0)
  end

  test "bug must be valid" do
    assert @bug.valid?
  end

  test "title must be present" do

  end

  test "title must not be too short" do

  end

  test "title must not be too long" do

  end

  test "description must be present" do

  end

  test "description must not be too short" do

  end

  test "description must not be too long" do

  end

  test "issue_type must be valid" do

  end

  test "default"
end
