import { NextFunction, Response, Request } from "express";

export default (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    return response.status(400).json({
      status: "error",
      message: err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err}`,
  });
};
