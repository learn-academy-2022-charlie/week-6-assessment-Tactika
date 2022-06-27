# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

    - Your answer:
      > To add a foreign key you would need to run a change migration. The foreign key would be named cohort_id and be on the student model. I've had to implement this process while creating an api that tracked animal sightings, I had accidentaly forgot to add the foreign key but implimented a change migration to ensure all animals could have many sightings.
    - Researched answer:
      > If you forget to add a foreign key or want to modify one, you will need to generate a migration to modify the schema so that you don't break your database. In this situation we would want to generate a migration named AddForeignKeyToStudents. The migration would be typed using the camel cased naming convention and be close to what you're trying to do (i.e. AddForeignKeyToStudents). The reason the change would be on the Student model is because the Cohort can have many students, but the individual students only have one cohort, so the pointer (foreign key) goes in the table that has records that belong_to another model record.

2. Which RESTful routes must always be passed params? Why?

    - Your answer:
      > Out of the eight RESTful routes the show, edit, update, delete, and destroy all need params since they all require an id to be present to work on a specific record.
    - Researched answer:
      > From what I could gather from my research on routes and parameters, the only solid answer I could get was stating that you are need to include parameters if you are passing any information from the frontend into the backend. I've always just figured if you were to be looking, editing, or deleting a specific item, you would be required to pass parameters.



3. Name three rails generator commands. What is created by each?

    - Your answer:
      > The three rails generator commands that I can recall easily are the model, controller, and migration generators. The model creates a new model table to store new types of relational data in a table. The controller creates a new controller to be able to create route methods for models and the migration generator allows for you to create a change to the database, for example changing the name of a column, a datatype, or even removing columns.
    - Researched answer:
      > The rails generator command has more than 10 built-in generators, such as: assets, channel, controller, generator, helper, job, mailer, scaffold, etc. The generator is also able to used to create custom generators, if you want a more custom tool. Some create fully functional controllers with methods already defined where others generate resources tying models together. While generators can be time-saving, using them can bring in additional lines of code that may be unncessary. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

    ```action: "GET" location: /students```
    > The route action would be index and the method would return all student records

    ```action: "POST" location: /students```
    > The route action would be create and the method would create a new record in the student table

    ```action: "GET" location: /students/new```
    > The route action would be new and the method would display a form to be used in creating a new record

    ```action: "GET" location: /students/2```
    > The route action would be show and would display the student record with the id of 2

    ```action: "GET" location: /students/2/edit```
    > The route action would be edit and would be to display an edit form to be used to update a record with the id of 2

    ```action: "PATCH" location: /students/2```
    > The route action would be patch and the method would update an item with the id of 2

    ```action: "DELETE" location: /students/2```
    > The route action would be destroy and the method would delete an item with the id of 2


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

    ### User Stories

   - Case 1:
      > As a user, I want to see my list of things to do, so I can track items needed to be completed.
   - Case 2:
      > As a user, I want to be able to add items to my todo list, so I can ensure new tasks are tracked.
   - Case 3:
      > As a user, I don't want to see tasks I've already completed, so I don't complete the same task twice.
   - Case 4:
      > As a user, I want to be able to change tasks, so that I can fix potential but inevetable spelling errors.
   - Case 5:
      > As a user, I want to be able delete todos, so that I can get rid of tasks I don't want to do... even if they aren't complete.
   - Case 6:
      > As a user, I want to see what tasks I have already completed, so I can ensure I keep track of how productive I've been.
   - Case 7:
      > As a user, I want to be able to login to my own to do list, so my list is secure and I can add items without public judgement.
   - Case 8:
      >  As a user, I want to have tasks require a time commitment, so that I can charge my customers for work completed accurately.
   - Case 9:
      > As a user, I want to be able to track todos by category, so I can see what part of my life is taking up the most time.
   - Case 10:
      > As a user, I want to share my list, so can send it to family to distribute the todos.