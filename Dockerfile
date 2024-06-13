<<<<<<< HEAD
# Use the official Node.js image as a base
FROM node:20.12.2

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 5173

# Start the application   
CMD ["npm", "run", "start"]
=======
# Use the official Node.js image as a base
FROM node:20.12.2

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 5173

# Start the application
CMD ["npm", "run", "start"]
>>>>>>> d22fd5c2d36a21ba1c896f93b9c8b8c571e0aa7f
