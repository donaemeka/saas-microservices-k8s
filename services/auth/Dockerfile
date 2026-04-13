# use Node.js image
FROM node:18

# create app folder
WORKDIR /app

# copy files
COPY package.json .
RUN npm install

COPY . .

# expose port
EXPOSE 3001

# start app
CMD ["node", "app.js"]