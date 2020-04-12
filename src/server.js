import server from "./app";

const PORT = process.env.PORT || 3000;

server.listen(PORT, "192.168.0.39", () => {
  console.log(`server is running PORT: ${PORT}`);
});
