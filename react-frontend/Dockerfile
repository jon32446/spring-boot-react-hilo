FROM node:lts AS development

WORKDIR /app

# let npm telemetry know it's an automted build
ENV CI=true
# explicitly use the default port
ENV PORT=3000

# copy everything so that during development, hot-reloading will still work.
# the src folder will be mounted as a volume in the docker container, allowing code changes to
# propagate from local dev into the dev container.
COPY . /app

# ci = clean install - nukes node_modules and rebuilds
RUN npm ci

CMD [ "npm", "start" ]

FROM development AS build

RUN npm run build

FROM nginx:1.13-alpine

COPY --from=build /app/build /usr/share/nginx/html
