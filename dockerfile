FROM node:20

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Install dependencies
RUN npm install
RUN cd frontend && npm install

# Copy the rest of the application
COPY . .

# Build frontend
RUN cd frontend && npm run build

# Build the server
RUN npm run build

# Start the server
CMD ["npm", "start"]