import chalk from "chalk";
import figlet from "figlet";
import { drawLine, sleep } from "../../utils/utils";

export const scoreReveal = async (score: number, answers: any[]) => {
  console.clear();
  await sleep(1000);
  console.log(chalk.magenta("\n[NODE Quiz] : ") + chalk.grey("..."));
  await sleep(1000);
  console.log(
    chalk.magenta("\n[NODE Quiz] : ") +
      chalk.grey("I think this is time to reveal your final score...")
  );
  await sleep(1000);
  console.log(chalk.magenta("\n[NODE Quiz] : ") + chalk.grey("Drum roll..."));
  await sleep(2000);
  console.clear();
  await sleep(1000);
  const word = "SCORE";
  for (let i = 0; i < 5; i++) {
    console.clear();
    drawLine(15, "-", "ANSI Shadow");
    console.log(
      figlet.textSync(`${word.slice(0, i + 1)}`, {
        font: "ANSI Shadow",
      })
    );
    drawLine(15, "-", "ANSI Shadow");
    await sleep(500);
  }
  console.clear();
  drawLine(15, "-", "ANSI Shadow");
  console.log(
    figlet.textSync(`SCORE : `, {
      font: "ANSI Shadow",
    })
  );
  drawLine(15, "-", "ANSI Shadow");
  await sleep(1000);

  console.clear();
  drawLine(15, "-", "ANSI Shadow");
  console.log(
    figlet.textSync(`SCORE : ${score} / ${answers.length}`, {
      font: "ANSI Shadow",
    })
  );
  drawLine(15, "-", "ANSI Shadow");
  await sleep(1000);

  // LAST COMMENT FOR PRESENTATOR DEPENDING ON SCORE
  if (score === answers.length) {
    console.log(
      chalk.magenta("\n[NODE Quiz] : ") + chalk.grey("You're a real genius !")
    );
  } else if (score >= answers.length / 2) {
    console.log(
      chalk.magenta("\n[NODE Quiz] : ") +
        chalk.grey("Not bad, not bad at all !")
    );
  } else {
    console.log(
      chalk.magenta("\n[NODE Quiz] : ") +
        chalk.grey("I think you should read more books...")
    );
  }
  await sleep(1000);
  console.log(
    chalk.magenta("[NODE Quiz] : ") +
      chalk.grey("Hope you had fun playing Node CLI Quiz !")
  );
  await sleep(1000);
};
