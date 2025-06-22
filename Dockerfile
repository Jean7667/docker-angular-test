FROM node:20.11.1

# Install Angular CLI globally
RUN npm install -g @angular/cli@19.2.14

# Set working directory
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y tree && apt-get install -y jq && rm -rf /var/lib/apt/lists/*

# Create Angular project inside /usr/src/app/app
RUN ng new front-end \
  --style css \
  --routing \
  --ssr \
  --standalone \
  --server-routing \
  --skip-git \
  --skip-install

# Set working directory to the Angular app
WORKDIR /usr/src/app/front-end

# Disable Angular CLI analytics
RUN ng analytics off

# Install app dependencies
RUN npm install

#prebuild themes
RUN ng add @angular/material --skip-confirmation --theme=indigo-pink --typography --animations

RUN ng generate component contact-form --standalone --style=css

RUN jq '.projects["front-end"].architect.serve.options.host = "0.0.0.0" | .projects["front-end"].architect.serve.options.allowedHosts = ["ng.home"]' angular.json > tmp.json && mv tmp.json angular.json

# Remove the invalid theme import
# RUN sed -i "/@angular\/material\/prebuilt-themes\/Custom.css/d" angular.json

# Expose default Angular port
EXPOSE 4200

# Run the Angular development server

#CMD ["ng", "serve", "--host", "0.0.0.0"]
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]



