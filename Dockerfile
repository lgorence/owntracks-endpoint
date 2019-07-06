FROM node:10

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

ENV DB_NAME owntracks_endpoint
ENV DB_USER postgres
ENV DB_PASS postgres
ENV DB_HOST localhost
ENV DB_PORT 5432

EXPOSE 4000
CMD [ "node", "bin/www" ]
