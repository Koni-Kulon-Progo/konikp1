FROM node:14-alpine

# Install PM2 globally
RUN npm install pm2 -g

# Set working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files to the container
COPY . .

# Copy ecosystem.config.js to the container
COPY ecosystem.config.js .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start PM2 and run the app
CMD ["pm2-runtime", "start", "ecosystem.config.js"]