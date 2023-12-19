import chalk from "chalk";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const suspense1 = async (success: boolean) => {
  console.log(chalk.magenta("\n[NODE Quiz] : ") + chalk.grey("This..."));
  await sleep(1000);
  console.log(chalk.magenta("[NODE Quiz] : ") + chalk.grey("is..."));
  await sleep(1000);
  if (success) {
    console.log(
      chalk.magenta("[NODE Quiz] : ") + chalk.green.bold("🏆 Correct! 🏆\n")
    );
  } else {
    console.log(
      chalk.magenta("[NODE Quiz] : ") + chalk.red.bold("❌ Incorrect! ❌")
    );
  }
};
// EXAMPLE 2 :
const suspense2 = async (success: boolean) => {
  console.log(
    chalk.magenta("\n[NODE Quiz] : ") +
      chalk.grey("I really wonder if you are right...")
  );
  await sleep(1000);
  console.log(chalk.magenta("[NODE Quiz] : ") + chalk.grey("Let's see..."));
  await sleep(1000);
  if (success) {
    console.log(
      chalk.magenta("[NODE Quiz] : ") +
        chalk.green.bold("🏆 Yes you are ! Good answer 🏆\n")
    );
  } else {
    console.log(
      chalk.magenta("[NODE Quiz] : ") +
        chalk.red.bold("❌ Well... no ! Wrong answer ❌")
    );
  }
};
// EXAMPLE 3 WITH ANIMATOR JOKE :

const suspense3 = async (success: boolean) => {
  console.log(
    chalk.magenta("\n[NODE Quiz] : ") +
      chalk.grey("I can't handle the suspense anymore...")
  );
  await sleep(1000);
  console.log(chalk.magenta("[NODE Quiz] : ") + chalk.grey("Tdmdmmmmmmmm..."));
  await sleep(1000);
  if (success) {
    console.log(
      chalk.magenta("[NODE Quiz] : ") + chalk.green.bold("🏆 Bingo ! 🏆\n")
    );
  } else {
    console.log(
      chalk.magenta("[NODE Quiz] : ") +
        chalk.red.bold("❌ And that's a miss ❌")
    );
  }
};

// EXAMPLE 4 LIKE TV SHOWS :

const suspense4 = async (success: boolean) => {
  console.log(
    chalk.magenta("\n[NODE Quiz] : ") + chalk.grey("I'm so excited !")
  );
  await sleep(1000);
  console.log(chalk.magenta("[NODE Quiz] : ") + chalk.grey("I can't wait !"));
  await sleep(1000);
  if (success) {
    console.log(
      chalk.magenta("[NODE Quiz] : ") + chalk.green.bold("🏆 Bravo ! 🏆\n")
    );
  } else {
    console.log(
      chalk.magenta("[NODE Quiz] : ") + chalk.red.bold("❌ Wrong ! ❌")
    );
  }
};

// EXAMPLE 5 WITH A MOVIE QUOTE :

const suspense5 = async (success: boolean) => {
  console.log(
    chalk.magenta("\n[NODE Quiz] : ") +
      chalk.grey("As said in ... some movie :")
  );
  await sleep(1000);
  console.log(
    chalk.magenta("[NODE Quiz] : ") + chalk.grey("The winner takes it all !")
  );
  await sleep(1000);
  console.log(
    chalk.magenta("[NODE Quiz] : ") + chalk.grey("Or maybe it was in a song...")
  );
  await sleep(1000);
  if (success) {
    console.log(
      chalk.magenta("[NODE Quiz] : ") +
        chalk.green.bold("🏆 Still, good answer ! 🏆\n")
    );
  } else {
    console.log(
      chalk.magenta("[NODE Quiz] : ") +
        chalk.red.bold("❌ Anyway, wrong answer ! ❌")
    );
  }
};

// EXAMPLE 6 :

const suspense6 = async (success: boolean) => {
  console.log(chalk.magenta("\n[NODE Quiz] : ") + chalk.grey("..."));
  await sleep(1000);
  if (success) {
    console.log(
      chalk.magenta("[NODE Quiz] : ") + chalk.green.bold("🏆 Bravo ! 🏆\n")
    );
  } else {
    console.log(
      chalk.magenta("[NODE Quiz] : ") + chalk.red.bold("❌ Mmmh... nope ! ❌")
    );
  }
};

const suspenseArray = [
  suspense1,
  suspense2,
  suspense3,
  suspense4,
  suspense5,
  suspense6,
];

export const suspense = async (success: boolean) => {
  await sleep(1000);
  const suspenseRandom =
    suspenseArray[Math.floor(Math.random() * suspenseArray.length)];
  await suspenseRandom(success);
  await sleep(1000);
};
