require 'test_helper'

class BugTest < ActiveSupport::TestCase
  def setup
    @bug = Bug.create(title: 'Moth in the server', description: 'There is a moth in the server.  There are so many bugs in this computer.',
                      issue_type: 0, priority: 2, status: 0)
  end

  test 'bug must be valid' do
    assert @bug.valid?
  end

  test 'title must be present' do
    @bug.title = ''
    assert_not @bug.valid?
  end

  test 'title must not be too short' do
    @bug.title = 'aa'
    assert_not @bug.valid?
  end

  test 'title must not be too long' do
    @bug.title = 'a' * 65
    assert_not @bug.valid?
  end

  test 'description must be present' do
    @bug.description = ''
    assert_not @bug.valid?
  end

  test 'description must not be too short' do
    @bug.description = 'a' * 19
    assert_not @bug.valid?
  end

  test 'description must not be too long' do
    @bug.description = 'a' * 601
    assert_not @bug.valid?
  end

  test 'issue_type must be valid' do
    invalid_issue_types = [-10, -1, 3, 10]
    invalid_issue_types.each do |is|
      begin
        @bug.issue_type = is
        assert false, "#{is} should be invalid"
      rescue
        assert true
      end
    end
  end

  test 'issue_type should be issue, enhancement, or feature' do
    valid_issue_types = [:issue, :enhancement, :feature]
    valid_issue_types.each do |is|
      begin
        @bug.issue_type = is
        assert true
      rescue
        assert false, "#{is} should be invalid"
      end
    end
  end

  test 'priority must be valid' do
    invalid_priorities = [-53, -1, 3, 35]
    invalid_priorities.each do |is|
      begin
        @bug.priority = is
        assert false, "#{is} should be invalid"
      rescue
        assert true
      end
    end
  end

  test 'priority should be low, medium, or high' do
    valid_priorities = [:low, :medium, :high]
    valid_priorities.each do |is|
      begin
        @bug.priority = is
        assert true
      rescue
        assert false, "#{is} should be invalid"
      end
    end
  end

  test 'status must be valid' do
    invalid_statuses = [-10, -1, 3, 10]
    invalid_statuses.each do |is|
      begin
        @bug.status = is
        assert false, "#{is} should be invalid"
      rescue
        assert true
      end
    end
  end

  test 'status should be open, closed, monitor' do
    valid_statuses = [:open, :closed, :monitor]
    valid_statuses.each do |is|
      begin
        @bug.status = is
        assert true
      rescue
        assert false, "#{is} should be invalid"
      end
    end
  end

end
