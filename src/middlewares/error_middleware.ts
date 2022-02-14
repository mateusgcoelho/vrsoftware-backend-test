import { NextFunction, Response, Request } from "express";

import AppError from "../services/app_error";

export default (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(400).json({
      status: "error",
      message: err?.message || "Error dispatch for app!",
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err}`,
  });
};
