import { Command } from "commander";
import { actionRunner } from "../../actionRunner";
import gradient from "gradient-string";

export const showGradients = (program: Command) => {
  program
    .command("show-gradients")
    .description("Show all available gradients")
    .action(
      actionRunner(() => {
        for (const gradientType of Object.keys(gradient)) {
          console.log(
            gradient[gradientType as keyof typeof gradient].multiline(
              gradientType
            )
          );
          console.log("\n\n");
        }
        return Promise.resolve();
      })
    );
};
