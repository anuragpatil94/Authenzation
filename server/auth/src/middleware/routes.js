export default ({ app }) => {
  // TODO: Connect to Routes
  app.get("/favicon.ico", (req, res) => res.status(204).end());
  app.get("/", (req, res, next) => {
    res.status(200).end();
  });

  //TODO: Error Handling Routes
};
