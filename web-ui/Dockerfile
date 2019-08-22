# Start with node image
FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/web/ui

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD ng build --prod