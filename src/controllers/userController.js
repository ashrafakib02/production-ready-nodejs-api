export const getProfile = async (req, res) => {
  res.status(200).json({
    message: "Protected profile accessed successfully",
    user: req.user
  });
};