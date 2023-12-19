import { Command } from "commander";
import { actionRunner } from "../actionRunner";
import chalk from "chalk";

export const gpt = (program: Command) => {
  program
    .command("gpt")
    .argument("<text>")
    .description("Generate text using GPT-3")
    .action(
      actionRunner(async (text: string) => {
        console.log(chalk.green("User : "), chalk.grey(text));
        try {
          const result = await fetch(
            "http://localhost:1234/v1/chat/completions",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                messages: [
                  {
                    role: "user",
                    content: text,
                  },
                ],
              }),
            }
          );
          const json = await result.json();
          console.log(
            chalk.magenta(json.choices[0].message.role),
            chalk.grey(json.choices[0].message.content)
          );
        } catch (e) {
          return Promise.reject(e);
        }
        return Promise.resolve();
      })
    );
};
