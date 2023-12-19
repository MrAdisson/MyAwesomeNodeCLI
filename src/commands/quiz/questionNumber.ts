import figlet, { Fonts } from "figlet";
import gradient from "gradient-string";

export const questionNumber = (index: number) => {
  const fonts = ["Ogre"] as Fonts[];
  const font = fonts[Math.floor(Math.random() * fonts.length)];
  console.log(
    gradient.morning.multiline(
      figlet.textSync("Question " + (index + 1), {
        font,
      })
    )
  );
};
