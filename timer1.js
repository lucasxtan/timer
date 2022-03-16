const args = process.argv.slice(2);


for (let delay of args) {
  delay = Number(delay);
  if (delay > 0 && !isNaN(delay)) {

    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay * 1000);
  }
};
