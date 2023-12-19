import figlet, { Fonts } from "figlet";
import gradient from "gradient-string";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const drawLine = (
  length = 10,
  char = "-",
  font = "ANSI Shadow" as Fonts
) => {
  console.log(
    gradient.instagram.multiline(
      figlet.textSync(char.repeat(length), {
        font,
      })
    )
  );
};
