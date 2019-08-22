# Start with node image as first stage builder
FROM node:10-alpine AS builder

# Create app directory
WORKDIR /usr/src/web/ui

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Build the Angular App for Production
CMD ng build --prod

# Use alpine image as second stage
FROM alpine:latest

# Copy the built Angular App to this final stage image
COPY --from=builder /usr/src/web/ui/dist/web-ui/ /usr/src/web/ui/dist/web-ui/