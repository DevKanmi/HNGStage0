# HNG-STAGE 0 TASK

### Description

This Project is a Simple public API that returns basic information in JSON format:
- Registered email
- Current Date and time in ISO 8601 format(UTC)
- The Github URL of the Project's codebase

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Npm](https://yarnpkg.com/en/docs/install) - A package manager for your code.


### Installation

Clone the repository to your local machine

```bash
git clone <repository-name>

cd <repository-name>

npm install
```

### Environment Variables

Use the .env.example file to create a .env file in the root directory of the project.

```bash
cp .example.env .env
```

### Start the application

To start the application in development mode, run the following command:

```bash
npm run dev
```

To start the application in production mode, run the following command:

```bash
npm run start
```

<br>

### API Specificaton
ENDPOINT: GET https://hngstage0-0qb0.onrender.com/profile

#### Response format
 ```bash
 {
  "email": "akinbayookanmiyo@gmail.com",
  "current_datetime": "2025-01-30T00:00:33Z",
  "github_url": "https://github.com/devKanmi/HngStage0"
}
 ```

 ### Depoloyment
 Deployed publicly at: https://hngstage0-0qb0.onrender.com/

### Additional Resources
Hiring a Node.js Developer? check out:
https://hng.tech/hire/nodejs-developers
