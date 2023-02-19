# Medical Bill

### Running the Medical Bill Upload Service:

1. Clone the repository and navigate to the project directory.

```
git clone git@github.com:RatnaPB/Medical-Bill.git
```

2. Install the required dependencies with npm install.

```
npm install
```

3. Start the server with node index.js.

```
node index.js
```

4. Use a tool like Postman to send requests to the API endpoints:
  - GET http://localhost:3000/items to retrieve the list of medical bills
  
  ```
  curl http://localhost:3000/items
  ```
  
  - POST http://localhost:3000/items with a JSON body containing the medical bill information to create a new bill.
  
  ```
  curl -H "Content-Type: application/json" -X POST -d "{\"patientName\":\"John Doe\",\"patientAddress\":\"123 Main St\",\"hospitalName\":\"General Hospital\",\"dateOfService\":\"2022-02-19\",\"billAmount\":\"1000\"}" http://localhost:3000/items
  ```
  
7. Run tests with npm test.

```
npm test
```

Take a look at the /images folder for more clarity.

### index.js

- Here, we have created an Express app, set up the middleware to parse JSON requests, and defined two routes - one for retrieving the list of medical bills, and one for creating a new bill.

- The bills array is used to store the medical bills in memory. When a new bill is created, it is added to the array, and the newly created bill is returned as the response.

- To test the API, we can use a tool like Postman to send GET and POST requests to the endpoints.

- To run the application, we can run the command node index.js in the command line.

### test.js

- The tests use the supertest library to send requests to the server and assert on the responses.

- To run the tests, we can run the command npm test in the command line.
