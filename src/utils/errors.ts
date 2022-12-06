"use strict";

import { CustomError } from "ts-custom-error";

class Error extends CustomError {
  public constructor(public code: number, message?: string) {
    super(message);
  }
}

export default Error;
