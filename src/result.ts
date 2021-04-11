import fs from "fs";
import path from "path";
import template from "./template";
import clc from "cli-color";

interface ResultInterface {
  ping: string | undefined;
  download: string | undefined;
  upload: string | undefined;
}

class Result {
  private getText: ResultInterface;

  constructor(getText: ResultInterface) {
    this.getText = getText;
  }

  format() {
    console.log(clc.blueBright(template(this.getText)));
  }
}

export default Result;
