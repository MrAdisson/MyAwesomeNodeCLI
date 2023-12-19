#!/usr/bin/env node

import { Command } from "commander";
import { commands } from "./commands";

import inquirer from "inquirer";
import chalk from "chalk";
import figlet, { Fonts } from "figlet";
import gradient from "gradient-string";
import { suspense } from "./commands/quiz/suspense";
import { questionNumber } from "./commands/quiz/questionNumber";
import { drawLine } from "./utils/utils";
import { scoreReveal } from "./commands/quiz/scoreReveal";

const program = new Command();

for (const command of Object.values(commands)) {
  command(program);
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// INQUIRE QUIZ WITH https://opentdb.com/api.php?amount=10

program
  .command("quiz")
  .description("Quiz")
  .action(async () => {
    console.clear();
    drawLine(17, "-", "ANSI Shadow");
    console.log(
      gradient.morning.multiline(
        figlet.textSync("NODE CLI QUIZ !", {
          font: "ANSI Shadow",
        })
      )
    );
    drawLine(17, "-", "ANSI Shadow");
    const init = await inquirer.prompt({
      name: "amount",
      message: chalk.magentaBright(
        "How many questions would you like to answer ?"
      ),
      prefix: "⭐️",
      type: "number",
    });
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${init.amount}&encode=base64`
    );
    const data = await response.json();

    const answers = data.results.map((question: any) => {
      const answers = question.incorrect_answers;
      answers.push(question.correct_answer);
      const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
      return {
        question: question.question,
        answers: shuffledAnswers,
        correctAnswer: question.correct_answer,
      };
    });
    let score = 0;
    for (const answer of answers) {
      const index = answers.indexOf(answer);

      // QUESTION
      console.clear();
      questionNumber(index);
      console.log("\n");
      const { userAnswer } = await inquirer.prompt({
        name: "userAnswer",
        message: Buffer.from(answer.question, "base64").toString("ascii"),
        type: "list",
        choices: answer.answers.map((answer: string) =>
          Buffer.from(answer, "base64").toString("ascii")
        ),
      });

      // GOOD OR BAD ANSWER
      if (
        userAnswer ===
        Buffer.from(answer.correctAnswer, "base64").toString("ascii")
      ) {
        score++;
        await suspense(true);
      } else {
        await suspense(false);
        console.log(
          chalk.magenta("[NODE Quiz] : ") +
            chalk.grey("The correct answer was : ") +
            chalk.green.bold(
              Buffer.from(answer.correctAnswer, "base64").toString("ascii")
            ) +
            "\n"
        );
      }
      // NEXT QUESTION OR FINAL SCORE

      if (index === answers.length - 1) {
        await inquirer.prompt({
          type: "input",
          name: chalk.grey("Discover your final score..."),
        });
      } else {
        await inquirer.prompt({
          type: "input",
          name: chalk.grey("Press enter to continue to the next question..."),
        });
      }
    }
    // FINAL SCORE
    await scoreReveal(score, answers);
  });

program.parse(process.argv);
