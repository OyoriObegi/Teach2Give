//Exercise 1 - Modify the function to accept an array of button attributes and update the type of the button accordingly.

type ButtonAttributes = {
    type: "button" | "submit" | "reset";
};

const modifyButtons = (attributes: ButtonAttributes[]) => { };

const buttonsToChange: ButtonAttributes[] = [
    {
        type: "button",
    },
    {
        type: "submit",
    },
];

modifyButtons(buttonsToChange);


//Exercise 2 - Avoiding Array Mutation
// This printNames function accepts an array of name strings and logs them to the console. However, there are also non-working @ts-expect-error comments that should not allow for names to be added or changed:
// Your task is to update the type of the names parameter so that the array cannot be mutated. There are two ways to solve this problem.

function printNames(names: readonly string[]) {
    for (const name of names) {
        console.log(name);
    }

// @ts-expect-error
names.push("John");

// @ts-expect-error
names[0] = "Billy";
}

// Exercise 3: An unsafe Tuple

//Here we have a dangerousFunction which accepts an array of numbers as an argument:

const dangerousFunction = (arrayOfNumbers: number[]) => {
    arrayOfNumbers.pop();
    arrayOfNumbers.pop();
  };
  
  // Additionally, we've defined a variable myHouse which is a tuple representing a Coordinate:
  
type Coordinate = [number, number];
  const myHouse: Coordinate = [0, 0];
  
  
  // Our tuple myHouse contains two elements, and the dangerousFunction is structured to pop two elements from the given array.
  
  // Given that pop removes the last element from an array, calling dangerousFunction with myHouse will remove its contents.
  
  // Currently, TypeScript does not alert us to this potential issue, as seen by the error line under @ts-expect-error:
  
  dangerousFunction(
    myHouse,
  );
  
  
  // Your task is to adjust the type of Coordinate such that TypeScript triggers an error when we attempt to pass myHouse into dangerousFunction.
  
  // Note that you should only change Coordinate, and leave the function untouched.

  
  