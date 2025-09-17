# Node Cloud Service

This project is a cloud service built using Node.js and Express. It provides a simple health check endpoint to verify the status of the service.

## Table of Contents

- [Node Cloud Service](#node-cloud-service)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Testing](#testing)
  - [Docker](#docker)
  - [Environment Variables](#environment-variables)
  - [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd node-cloud-service
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and set your environment variables.

## Usage

To start the application, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

## API Endpoints

- **GET /health**
  - Description: Checks the health of the service.
  - Response: Returns a JSON object indicating the service status.

## Testing

To run the tests, use:
```
npm test
```

## Docker

To build and run the Docker container, use:
```
docker build -t node-cloud-service .
docker run -p 3000:3000 node-cloud-service
```

## Environment Variables

The following environment variables are required:

- `PORT`: The port on which the application will run (default is 3000).
- Other variables as specified in the `.env.example` file.

## License

This project is licensed under the MIT License.# POC
# POC
