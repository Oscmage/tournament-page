# Tournament Page

## Installation

### Backend

#### Step 1

Run "Yarn" in backend to install dependencies.

#### Step 2

1. Make sure you have installed mongodb locally (on mac `brew install mongodb` follow some guide online).
2. Make sure mongodb is running by writing `mongod` in the terminal
3. Start a mongodb shell by typin `mongo`
4. In the shell create a mongodb collection by typing `use node-mongo-registration-login-api`

#### Step 3

In the root directory of backend create a file called "config.json" containing the following json object.

{
"connectionString": "mongodb://localhost/node-mongo-registration-login-api",
"secret": "FAKE JWT TOKEN STRING WHOP WHOP",
"username": "USERNAME FOR A GMAIL ACCOUNT FOR SENDING EMAIL REPLACE",
"password": "PASSWORD FOR THAT GMAIL ACCOUNT"
}

### Frontend

Run "Yarn" in frontend

## Running the frontend and backend

Go to the root folder (above both frontend and backend) and run "yarn start"
