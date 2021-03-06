# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

### Run
`node app.js`

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
- Task #1 : Added a new view and two routes for editing/updating a todo item.

### Instructions to run tests
- npm test

### Instructions to deploy to minikube
- Start minikube and Set docker env 
    - `minikube start`
    - `eval $(minikube docker-env)`
    - `helm init --upgrade`
- Build docker image : `docker build -t my-todolist .`
- Deploy `helm install -n my-todolist my-todolist`
- Get the URL : `minikube service my-todolist --url`

> ### Clean up
> - `helm del --purge my-todolist`
> - `minikube delete`