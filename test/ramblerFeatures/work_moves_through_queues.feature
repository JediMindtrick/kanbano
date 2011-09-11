Feature: Work moves through queues
  In order to see guage the work load
  As an External Stakeholder
  I want for work to progress through queues according to business rules

Scenario: Work goes forward through the queues
  Given the application is loaded 
  And I have a piece of work in a queue
  And the location of the work is not in the last queue
  When I advance the work
  Then the work will move into the next queue
  And the work will no longer exist in the old queue

#Scenario: Work starts in the idea pen
#  Given context
#  When event
#  Then outcome

#Scenario: Work ends in the complete log
#  Given context
#  When event
#  Then outcome

#Scenario: Work can sometimes go backwards through the queues
#  Given context
#  When event
#  Then outcome

