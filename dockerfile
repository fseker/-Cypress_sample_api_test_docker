FROM cypress/included:9.7.0
RUN mkdir /CYPRESS_API_TEST
WORKDIR  /CYPRESS_API_TEST
COPY  ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npx", "cypress", "run"] 