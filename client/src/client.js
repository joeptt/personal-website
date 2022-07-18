import * as contentful from "contentful";
const secrets = require("../../secrets.json");

export const client = contentful.createClient({
    space: secrets.REACT_APP_SPACED_ID,
    accessToken: secrets.REACT_APP_ACCESS_TOKEN,
});
