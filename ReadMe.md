## 13 E-commerce Back-End: Object-Relational Mapping    

* [Github Repository](https://github.com/KrispyKhang/NoSql-Social-Network)

## Task
Your challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.jsLinks to an external site. and MongooseLinks to an external site. packages.

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```


## Summary
* Express and Mongoose were installed using Node.js
* Server.Js is built and connected to the routes folder
* Connection.js establishes a MongoDB connection 
* Models folder to create the Schemas for Thoughts, User, and Reaction
* Controller Folder created for handling various API Requests related to Thoughts, User, and Reaction
* Routes and API-Routes folder to import the necessary dependencies and controllers from all of our RESTful APIs

## Disclaimer
* I do not have MongoDB account for testing, However, I am 100% confident this will all work once tested.


![](./Image%20Assets/Feb-16-2024%2020-00-54.gif)


## Finished Results
* This is esssntial for Social Media Networks where friends can connect and interact with one another, an essential back-end foundation.