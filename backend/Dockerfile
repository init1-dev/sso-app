FROM node:21

WORKDIR /app

COPY package*.json ./

RUN npm install --ignore-platform

COPY . .

# RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "dev"]