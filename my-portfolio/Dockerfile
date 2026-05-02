ARG NODE_VERSION=24.15.0

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG REACT_APP_SERVICE_ID
ENV REACT_APP_SERVICE_ID=${REACT_APP_SERVICE_ID}

ARG REACT_APP_TEMPLATE_ID
ENV REACT_APP_TEMPLATE_ID=${REACT_APP_TEMPLATE_ID}

ARG REACT_APP_USER_ID
ENV REACT_APP_USER_ID=${REACT_APP_USER_ID}

RUN npm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM nginx:alpine AS final

COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that the application listens on.
EXPOSE 80

# Run the application.
CMD ["nginx", "-g", "daemon off;"]
