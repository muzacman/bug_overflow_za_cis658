# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* Testing specifications for bugs:
    title: string
    description: text
    issue_type: enum - issue, enhancement, or feature
    priority: enum - low, medium, or high
    status: enum - open, closed, monitor
    
    -title must be present
    -title must be between 5 and 64 characters
    -description must be present
    -description must be between 20 and 600 characters
    -issue_type, priority, and status must be valid
    -default value of issue_type should be feature
    -default value of priority should be medium
    -default value of status should be open
