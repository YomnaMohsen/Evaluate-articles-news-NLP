# Project #4: Evaluating Articles-News With NLP

## Overview

**Evaluating Articles-News With NLP** is the fourth project in Udacity Front-End Nanodegree, it requires to build single page web application to run Natural Language Processing on news or articles.

The goal of this project is to practice with:

- Set up Webpack
- Sass Styles
- Webpack loaders and plugins
- Service Workers

* Using external APIs and creating request to them
* Using Jest for testing

## Features

- Based on Url entered by user, the app uses [Meaning Cloud API](https://www.meaningcloud.com/) to analyze article by 5 parameters:

  - Agreement
  - Subjectivity
  - Score_tag
  - Confidence
  - Irony

  ## Dependencies

  - Node.js
  - Express
  - Cors (Node js package)
  - Jest
  - Others related to webpack stuff

## Getting Started

### Prerequisites

1. Download and install Node.js
2. Install dependencies using npm

```
npm install
```

3. Get MeaningCloud API_Key from [here](https://www.meaningcloud.com/developer/login)

4. Clone this repo.

5. `cd` into project directory.

6. Create `.env` file into root of project directory.

7 . Fill `.env` file with obtained API_Key

```
API_KEY = Enter_Your_Key_Here
```

### Running Tests:

To run tests, naviagte to the project directory then run this command

```
npm run test
```

### Running in Development Mode

1. Run the following command at root of project directory, to start webpack dev-server and generate dist folder.

```
npm run build-dev

```

2. Access `http://localhost:8080/` in your browser.

3. Run the server

- Be sure that server does not run on port 8080, as this port is the default port of webpack dev-server, unless specified otherwise in its configuration.

- From project directory, Use the following command

```
npm run start

```

4.open `http://localhost:8081/` in your browser.

### Running in Production Mode

1. Build dist folder

2. ```
   npm run build-prod

   ```

3. Run the server

```
npm run start

```

4.open `http://localhost:8081/` in your browser.

## Authors

Yomna Mohsen
