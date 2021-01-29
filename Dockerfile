#Docker image for my CV application built by Nextjs
#Hooman Hesamyan

FROM node:latest
LABEL "Authour"="Hooman Hesamyan"
LABEL "Name"="CV"
RUN mkdir -p home/app
WORKDIR home/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","run","dev"]
