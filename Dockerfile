FROM node:18-alpine

COPY ./dist ./dist
COPY ./package*.json ./
RUN yarn install --production

EXPOSE 9999

CMD [ "node", "dist/server_bundle.js" ]