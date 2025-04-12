## Manual Installation
- Install nodejs locally
- Clone the repo
- npm install
- Start the db locally
- Change the .env file and update your DATABASE_URL
- npx prisma migrate dev
- npx prisma generate
- npm run build
- npm run start

## Docker installation 
- Install docker
- Create a network 
    - docker network create user-network
- Start postgres
    - docker run --network user-network --name postgresdb1 -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- Build the image 
    - docker build --network=host -t user-project .
- Start the image 
    - docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgresdb1:5432/postgres --network user-network -p 3000:3000 user-project

## Docker Compose installation 
- Install docker,docker-compose
- Run `docker-compose up`