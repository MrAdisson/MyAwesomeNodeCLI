import { Command } from "commander";
import figlet from "figlet";
import { actionRunner } from "../../actionRunner";

export const showFonts = (program: Command) => {
  program
    .description("Show all available fonts")
    .command("show-fonts")
    .argument("[page]")
    .option("-s, --size <size>", "Number of fonts per page", "10")
    .action(
      actionRunner((page = 1, options) => {
        console.log(figlet.fontsSync().length);
        for (const font of figlet
          .fontsSync()
          .slice(
            (parseInt(page) - 1) * parseInt(options.size),
            parseInt(page) * parseInt(options.size)
          )) {
          console.log(font + " : ");
          console.log(
            figlet.textSync(font, {
              font,
            })
          );

          console.log("\n\n");
        }
        console.log(
          "Page " +
            page +
            " of " +
            Math.ceil(figlet.fontsSync().length / parseInt(options.size))
        );
        return Promise.resolve();
      })
    );
};
