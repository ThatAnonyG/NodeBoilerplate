# Get latest Node image from DockerHub
FROM node:latest

# Set the root directory
WORKDIR /server

# Install node modules
COPY ./package.json .
RUN npm install

# Copy the bundle files
COPY ./dist ./dist

# Open port 3000 for incoming requests
EXPOSE 3000

# Run the app with node command
CMD ["node", "./dist/bundle.js"]
