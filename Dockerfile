# Use the official Node.js runtime as the parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Install Prisma CLI globally
RUN npm install -g prisma

# Generate Prisma client
RUN npx prisma generate

# Build the Next.js app
RUN npm run build

# Install PM2 globally
RUN npm install pm2 -g

# Copy the ecosystem.config.js file to the container
COPY ecosystem.config.js .

# Start the Next.js app using PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
