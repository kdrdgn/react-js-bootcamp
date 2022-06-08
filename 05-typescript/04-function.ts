const add = (a: number, b: number): number => a + b;

// function with age as an optional parameter

const happyBirthday = (name: string, age?: number): boolean => {
  if (!age) {
    console.log(`Happy Birthday, ${name}`);
  } else {
    console.log(`Happy ${age} Birthday, ${name}`);
  }
  return true;
};


happyBirthday('Hello');
