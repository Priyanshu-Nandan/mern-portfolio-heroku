FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Install dependencies
RUN npm install
RUN cd frontend && npm install

# Copy the rest of the application
COPY . .

# Build frontend with CI=false to ignore warnings
RUN cd frontend && CI=false npm run build

# Start the server
CMD ["npm", "start"]