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
ENV PORT 80

EXPOSE 80
CMD [ "node", "bin/www" ]
