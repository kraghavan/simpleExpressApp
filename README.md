# Simple api server app using Expressjs 4
<p> This is a simple JS server app using express npm package. It returns different outputs for the GET endpoint based on different header values. This project is for knowledge sharing and learning purposes. Feel free to clone it and modify.</p>


Clone or Download code and run the following steps.
1. Install the npm dependencies
```
npm install
```

2. build the app
```
node run build
```

3. start the app (by default run as localhost at port 3000)
```
node run start
```

4. You can use postman (not covering how to use postman here) or send curl requests. Refer the commands below to run curl command to send request to the server app. 

```
// for sending a GET request with Accept header
curl -X GET http://localhost:3000/api

// for sending GET request without Accept header
curl -i -X GET -H 'Content-Type: application/json; charset=UTF-8' -H 'Accept:' http://localhost:3000/api

// for sending a POST request 
curl -X POST http://localhost:3000/api

```

5. run unit tests
```
npm run test
```

6. The logging for each request is captured using winston npm package. Its saved in "app.log" file in the same folder as the app.js or server.js file.

7. To disabled logging, please go to appSetting.json and set "logging" field to be false. Its enabled and set to true by default.

8. How to install docker image (steps below will not install docker in your laptop)
```
docker build . -t kraghavan611/simple-express-app
```

9. How to run my app inside docker
```
docker run -p 49160:3000 -d kraghavan611/simple-express-app
```

10. verify docker container is running 
```
docker ps
```

11. kill docker container
```
docker ps
```

