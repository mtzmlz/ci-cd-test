FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD NODE_ENV=prod PORT=9998 npm start
EXPOSE 9998