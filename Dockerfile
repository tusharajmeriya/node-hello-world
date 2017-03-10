FROM node
EXPOSE 3000
RUN npm install
RUN node package.json