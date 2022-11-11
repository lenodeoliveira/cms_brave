
FROM node:16 as dependencies

# Create app directory
WORKDIR /usr/src/cms-brave

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

COPY . .

RUN chmod +x /usr/src/cms-brave/start.sh

RUN npm install

EXPOSE 5050
