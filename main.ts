import inquirer from "inquirer";
import chalk from "chalk";

//TO Do LIST

console.log(
  chalk.cyanBright.bold(
    '================================================="ToDo List"========================================================'
  )
);
let Array = [];
let Project = true;
while (Project) {
  let input = await inquirer.prompt([
    {
      name: "select",
      type: "list",
      message: chalk.greenBright.bold.italic("What would you like to do?"),
      choices: [
        chalk.magentaBright.bold.italic(
          "Enter" + chalk.yellowBright.bold(' "New" ') + "to add in list"
        ),
        chalk.magentaBright.bold.italic(
          "Enter" + chalk.yellowBright.bold(' "List" ') + "to display list"
        ),
        chalk.magentaBright.bold.italic(
          "Enter" +
            chalk.yellowBright.bold(' "Delete" ') +
            "to delete from list"
        ),
        chalk.magentaBright.bold.italic(
          "Enter" +
            chalk.yellowBright.bold(' "Quit" ') +
            "to close the application"
        ),
      ],
    },
  ]);
  // console.log(input.select);
  if (
    input.select ===
    chalk.magentaBright.bold.italic(
      "Enter" + chalk.yellowBright.bold(' "New" ') + "to add in list"
    )
  ) {
    let Add = await inquirer.prompt([
      {
        name: "new",
        type: "string",
        message: chalk.gray.bold.italic("Enter new to do?"),
      },
    ]);
    Array.push(Add.new);
    console.log(
      "\n" +
        "(" +
        Array.indexOf(Add.new) +
        ")" +
        chalk.redBright.bold.italic(Add.new) +
        chalk.blueBright.bold.italic(" added in the list\n")
    );
  }
  if (
    input.select ===
    chalk.magentaBright.bold.italic(
      "Enter" + chalk.yellowBright.bold(' "List" ') + "to display list"
    )
  ) {
    for (let item of Array) {
      console.log(
        "\n" +
          "(" +
          Array.indexOf(item) +
          ")" +
          chalk.redBright.bold.italic(item) +
          chalk.blueBright.bold.italic(" added in the list")
      );
    }
  }
  if (Array[0] === undefined) {
    console.log(
      chalk.blueBright.bold.italic(
        "\n==========================================================\n"
      )
    );

    console.log(
      chalk.redBright.bold.italic(
        "                      NO Entries                          "
      )
    );

    console.log(
      chalk.blueBright.bold.italic(
        "\n==========================================================\n"
      )
    );
  }

  if (
    input.select ===
    chalk.magentaBright.bold.italic(
      "Enter" + chalk.yellowBright.bold(' "Delete" ') + "to delete from list"
    )
  ) {
    let deleted = await inquirer.prompt([
      {
        name: "task",
        type: "string",
        message: chalk.magentaBright.bold.italic(
          "Enter index number you want to delete?"
        ),
      },
    ]);
    let indexno = Array.splice(deleted.task, 1);
    console.log(
      "\n" +
        chalk.black.bold.italic.bgWhite(indexno) +
        chalk.gray.bold.italic(" delete from list")
    );
  }
  if (
    input.select ===
    chalk.magentaBright.bold.italic(
      "Enter" + chalk.yellowBright.bold(' "Quit" ') + "to close the application"
    )
  ) {
    break;
  } else {
    continue;
  }
}
console.log(
  chalk.cyanBright.bold.italic(
    "===================================================" +
      chalk.magentaBright.bold("ToDo List END") +
      "================================================="
  )
);
