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
    -issue_type should be issue, enhancement, or feature
    -default value of issue_type should be feature
    -priority should be low, medium, or high
    -default value of priority should be medium
    -status should be open, closed, monitor
    -default value of status should be open
    
* Testing specifications for users:
    lname: string
    fname: string
    email: string
    thumbnail: string
    
    -lname, fname, and email must be present
    -email must be unique and be a valid format for an email address
    -thumbnail must end with either .png, .jpg, or .gif (ok to leave black)
    
