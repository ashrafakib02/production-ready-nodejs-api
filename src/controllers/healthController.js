const getHealthStatus = (req, res) => {
  res.json({
    status: "ok",
    message: "Server is healthy from get health"
  });
};

export default getHealthStatus;