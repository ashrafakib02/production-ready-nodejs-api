import { registerUser, loginUser } from "../services/authService.js";
import { registerSchema } from "../validators/authValidator.js";
import { loginSchema } from "../validators/loginValidator.js";

export const register = async (req, res) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    const user = await registerUser(validatedData);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message
    });
  }
};

export const login = async (req, res) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const result = await loginUser(validatedData);

    res.status(200).json({
      message: "Login successful",
      ...result
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message
    });
  }
};