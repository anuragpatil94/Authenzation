import dotenv from "dotenv";
let config = dotenv.config();

if (!config) {
  console.log("Configurations Not Found");
}

export default {
  PORT: parseInt(process.env.PORT)
};
