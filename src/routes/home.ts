"use strict";

import Router from "express-promise-router";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: false,
    error: true,
    message: "Nothing to see here",
  });
});

export default router;
