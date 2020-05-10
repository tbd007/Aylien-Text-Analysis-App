export function nameChecker(name) {
  console.log("::: Running nameChecker :::", name);

  if (name !== undefined) {
    return name.length;
  }
}

module.exports = nameChecker;
