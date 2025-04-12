## Manual Installation
- Install nodejs locally
- Clone the repo
- npm install
- start the db locally
- change the .env file and update your DATABASE_URL
- npx prisma migrate dev
- npx prisma generate
- npm run build
- npm run start

## Docker installation 
- Install docker
- Start postgres
- Build the image - `docker build -t user-project .`
- Start the image - `docker run -p 3000:3000 user-project`
