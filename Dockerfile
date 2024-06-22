FROM node:18-alpine AS sk-build
WORKDIR /usr/src/app

ARG TZ=Europe/Moscow
ARG PUBLIC_HELLO

COPY . /usr/src/app
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Remove node_modules and package-lock.json to clean up previous installs
RUN rm -rf node_modules package-lock.json

# Install dependencies without --no-optional flag
RUN npm install

RUN npm run build

FROM node:18-alpine
WORKDIR /usr/src/app

ARG TZ=Europe/Moscow
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Copy package files
COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json

# Install only production dependencies
RUN npm ci --only=production

# Copy built files
COPY --from=sk-build /usr/src/app/build /usr/src/app/build

EXPOSE 3000
CMD ["node", "build/index.js"]
