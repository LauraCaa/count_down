FROM node:20
WORKDIR /opt/count_down
COPY  . ./
COPY package*.json .
EXPOSE 3000
CMD [ "sleep", "infinity" ]