import { Command } from "commander";
import figlet from "figlet";
import gradient from "gradient-string";
import { actionRunner } from "../actionRunner";
import chalk from "chalk";

export const transform = (program: Command) => {
  program
    .command("transform")
    .description("Transform a text into a figlet text")
    .argument("[source]")
    .option("-f, --font <font>", "Font name", "Standard")
    .option("-c, --color <color>", "Font color", "blue")
    .option("-g, --gradient ", "Font color", false)
    .option("-gt, --gradient-type <gradientType>", "Gradient type", "pastel")
    .action(
      actionRunner((source = "Hello World !", options, command) => {
        let text = "";
        try {
          text = figlet.textSync(source, {
            font: options?.font,
          });
        } catch (error: any) {
          error.message = "Font not found";
          return Promise.reject(error);
        }
        if (options?.gradient) {
          try {
            const gradientFn =
              gradient[options?.gradientType as keyof typeof gradient];
            text = gradientFn.multiline(text);
          } catch (error: any) {
            error.message = "Gradient Type not found";
            return Promise.reject(error);
          }
        } else {
          try {
            text = chalk.keyword(options?.color)(text);
          } catch (error: any) {
            error.message = "Color not found";
            return Promise.reject(error);
          }
        }
        console.log(text);
        return Promise.resolve();
      })
    );
};
