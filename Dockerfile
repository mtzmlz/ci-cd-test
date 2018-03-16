FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD PORT=8080 npm start
EXPOSE 8080