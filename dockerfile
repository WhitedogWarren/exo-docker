FROM node:22-slim
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# If you are building your code for production
# RUN npm ci --omit=dev
EXPOSE 3000

CMD [ "npm", "run", "start" ]