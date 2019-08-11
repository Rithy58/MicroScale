# Start with nginx image
FROM nginx:1-alpine

# Copy config file
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy static files
COPY ./www/ /var/www/