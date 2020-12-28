
# Guitar Store Manager
---


## Product Description
---

This app was created to allow users to manage a guitar store, similar to Guitar Center. Users may log in as either an Admin or an Employee and have management access to change store inventory based on admin priveledges.


## Technologies Used
---

- React - version 17.0
- Axios - version 0.21.1
- React-Router-Dom - version 5.2.0
- React-Bootstrap - version 1.4.0

## Features
---

- [x] Login as employee or admin
- [x] Logout if logged in
- [x] Sign Up if you don't have an account
- [x] Access special admin features if logged in as Admin
- [x] Promote or Demote employees to have Admin Privelegdes
- [x] View all products
- [x] View a product by ID
- [x] Add a product
- [x] Edit a product
- [x] Delete a product
- [x] View all employees
- [x] View a employee by ID
- [x] Add a employee
- [x] Edit a employee
- [x] Delete a employee

To-Do:

- [ ] Implement the ability to view products by department/brand
- [ ] Implement the ability to view employees based on whether or not they are logged in

## Getting Started
---

- To get started using this application, first clone tho repo by using the following command

```
git clone https://github.com/tobynboudreaux/Project1-GuitarStore-TNB.git
``` 
> If you don't have git installed, please follow the following tutorial to intall it on your device

> [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- Install Dependencies by running the following command:

```
npm i axios react-bootstrap react-router-dom
```

- Run the following command to start the application on http://localhost:3000:

```
npm start
```

## Usage
---

Available Routes:

Navbar Component is seen on every page and dynamically changes

"/":

Home page

Landing Component

"/login"

Login page

Allows users to login as an employee or administrator

"/signup"

SignUp page

Allows users to sign up to be an employee of the company

"/products"

Shows all products in the database, allows all CRUD actions

Can use the dropdowns to view products by brand/department

Products Component

"/product/(id)"

Shows the product with the unique ID (id)

Product Card Component

"/employees"

Shows all employees, allows all CRUD actions

Profiles Component/UserInformationCard Component
