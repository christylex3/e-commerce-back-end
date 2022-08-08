# E-Commerce Backend

## Description

This application works as the backend of a internet retail or e-commerce.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Video](#video)
* [Contribution](#contribution)
* [Questions](#questions)

## Installation

The application does require dependencies, so enter this code (below) into the terminal and run it:
```
npm i
```

Download [Insomnia](https://insomnia.rest/download) for backend functionality testing.

## Usage

To set up for the app:
1. Add in your own `.env` file for database credentials.
2. Open up terminal to navigate to `db`.
3. Then, enter mysql to run `SOURCE schema.sql` and then quit.
4. Navigate back to root and do `npm run seed`.
5. Then launch the app with `node server.js` and make backend requests

### Category Requests
* `GET` /api/categories - returns all categories and their associated Product data
* `GET` /api/categories/:id - finds one category by its id and their associated Product data
* `POST` /api/categories - creates a new category
* `PUT` /api/categories/:id - updates the category's name with that id
* `DELETE` /api/categories/:id - deletes the category with that id

### Product Requests
* `GET` /api/products - returns all products and their associated Category and Tag data
* `GET` /api/products/:id - finds one product by its id and their  associated Category and Tag data
* `POST` /api/products - creates a new product
* `PUT` /api/products/:id - updates the product data with that id
* `DELETE` /api/products/:id - deletes the product with that id

### Tag Requests
* `GET` /api/tags - returns all tags and their associated Product data
* `GET` /api/tags/:id - finds a single tag by id and their associated Product data
* `POST` /api/tags - creates a new tag
* `PUT` /api/tags/:id - updates the tag's name with that id
* `DELETE` /api/tags/:id - deletes the tag with that id

## Video
 [A video is provided](https://drive.google.com/file/d/1DYCoWUp1LGhC6Rn_J-vPpzYKpZXvuZ7Y/view) to demonstrate the functionality of the e-commerce backend.

## Contribution

No contributions needed.


## Questions

If you have any questions and want to reach me, email me at <christylex3@gmail.com>. Also, you can check out my repository [here](https://github.com/christylex3).