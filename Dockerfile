FROM node:14-alpine
WORKDIR /countries-app
ENV NODE_ENV=development
COPY . .
COPY package*.json ./
RUN npm ci
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]