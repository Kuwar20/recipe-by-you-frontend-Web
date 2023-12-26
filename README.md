<!--
<div align="center">
  <img src="https://socialify.git.ci/Kuwar20/Auth-fullstack-P-2/image?description=1&font=Bitter&issues=1&name=1&theme=Light" alt="Auth-fullstack-P-2" width="640" height="320" />
</div>
-->
<h1 align="center">Recipe Book</h1>
<p align="center">
 Recipe Book Web App With Essential Functionalities & Minimal UI
</p>

## Demo

Watch a video showcasing the project in action Locally : 


https://github.com/Kuwar20/Mern-frontend-P-1/assets/66473902/5b05d307-ed88-46ad-b407-01f374c9f38f



## Prerequisites


- [Node.js](https://nodejs.org/)&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- JavaScript runtime built on Chrome's V8 JavaScript engine
- [npm](https://www.npmjs.com/)&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Package manager for JavaScript
- [MongoDB](https://www.mongodb.com/)&nbsp; &nbsp;&nbsp;&nbsp;  - NoSQL database for storing application data

## Installation & Executing the website locally

* Use the package manager [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) to install Recipe Book - Installation

```bash
npm install --global yarn
```
Download this repo using
```bash
git clone github-repo-url
```
* Step-by-step Instruction - Execution

```bash
Open terminal

# get into client dir
cd Mern-frontend-P-1\client  

# run client-side
yarn start

Open another terminal

# get inside server dir
cd Mern-Backend-P-1\server\src

# run server-side
node index.js
```

Folder Structure 
============================

> The project was made with the intent of hosting it on Render, Thus shaping it's current folder structure .

### Top-level directory layout

    .
    |
    ├── client                   # React application source code
    │   │ 
    |   ├── public                      # Static assets and files served by the React application
    │   │ 
    │   ├── src                         # React components and assets
    │        │ 
    |        ├── components                   # Reusable React components
    |        ├── hooks                        # Custom React hooks
    |        ├── pages                        # Individual pages of the application
    |        └── App.js                       # Main React application component
    │   
    │   
    └── README.md                # Documentation providing an overview of the project and its structure

    
| Main | Folder | File Name | Details 
|----|--------|------|-------|
| client  | src | App.js | Entry point for Frontend

# Endpoints - 5

## 1- Register 
<br>

This HTTP POST request is used to register a user.

```http
POST /auth/register
```
### Request Body

JSON Request body in the following format:

``` json
{
    "username":"your_username",
    "password":"your_password"
}
```
### Request Body

JSON Request body in the following format:

``` json
{
   "User Created Successfully"
}
```
--- 
## 2- Login 
<br>


This HTTP POST request is used to register a specific user.

```http
POST /auth/login 
```
### Request Body

JSON Request body in the following format:

``` json
{
    "username":"your_username",
    "password":"your_password"
}
```

### Response

- Status: 200

``` json

    "token": "Token_value",
    "userID": "userID from DB"


 ```
---
## 3- Save an Recipe 
<br>

This endpoint is used to Save a specific user's Recipe. The HTTP GET request should be sent to 

```http
GET  /recipes/{id}
```

### Request Body

JSON Request body in the following format:

``` text
Not Required
```

### Response

- Status: 200

``` json
{
    "_id": "your_recipe_id",
    "name": "White Chocolate Walnut Cookies",
    "ingredients": [
        "Butter",
        "Light brown sugar and granulated white sugar",
        "One large egg",
        "Cinnamon and vanilla",
        "White chocolate"
    ],
    "instructions": "Step by Step Process",
    "imageUrl": "your_image_url.jpg",
    "cookingTime": 30,
    "userOwner": "your_user_id",
    "__v": 0
}


 ```
---
## 4- All Recipe

This endpoint is used to get Details of all recipes.

```http
GET  /recipes
```
### Request Body

JSON Request body in the following format:


``` json
{
  "No Body Required"
}
```

### Response

- Status: 200

```json
[
    {
        "_id": "example_recipe_id",
        "name": "Delicious Pasta Bake",
        "ingredients": [
            "Your preferred pasta type",
            "High-quality feta cheese",
            "Fresh cherry tomatoes",
            "Garlic cloves",
            "Fresh basil leaves",
            "Add more ingredients as needed"
        ],
        "cookingTime": 40,
        "userOwner": "example_user_id",
        "__v": 0
    }
]
```
---
## 5- Saved Recipe 
<br>

This endpoint is designed to GET a saved a recipe


```http
GET  /recipes/savedRecipes/{id}
```
### Request Body

JSON Request body in the following format:

``` json
{
  "No Body Required"
}
```

### Response

- Status: 201

```json
{
    "savedRecipes": [
        {
            "_id": "example_recipe_id",
            "name": "Example Recipe",
            "ingredients": [
                "Ingredient A"
            ],
            "instructions": "Follow the instructions carefully",
            "imageUrl": "Image URL",
            "cookingTime": 20,
            "userOwner": "example_user_id",
            "__v": 0
        }
    ]
}
 ```

---
## Status Codes

Recipe Book WebApp returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


## Dependencies used

#### Frontend:
* react-router-dom
#### Backend:
* Mongoose 


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

  </tr>



## Authors Note

While I was the main developer of this MERN stack project, this project couldn't have even started without the help of these open-source projects, special thanks to:

- [JavaScript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)


## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change](https://github.com/Kuwar20/Mern-frontend-P-1/commits/main/) 
* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE Tab for details

## Acknowledgments

Inspiration, code snippets, etc.
* [React Documentation](https://react.dev/learn)
* [Express.js Documentation](https://expressjs.com/en/5x/api.html)
* [Mongoose](https://mongoosejs.com/docs/)
