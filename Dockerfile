FROM node:16

# Next we create a directory to hold the application code inside the image,
# this will be the working directory for your application:

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/app/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


#To bundle your app's source code inside the Docker image, use the COPY instruction:
COPY . /usr/src/app

EXPOSE 8080

CMD [ "npm", "run", "start" ]
