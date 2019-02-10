# Use latest node alpine image
FROM node:11-alpine

# Crate App directory && Set ownership of dir to node user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Explicitly set working directory
WORKDIR /home/node/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy application code to the working directory
COPY . .

# Change permissions to the node user
COPY --chown=node:node . .

# Set the user to node
USER node

# Expose our applications port
EXPOSE 3000

# Run the Application
CMD npm run start
