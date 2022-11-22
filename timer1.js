const originalNums = process.argv.slice(2);
const sortedNums = originalNums.sort((a, b) => a - b);

const timer = () => {
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] > 0) {
      setTimeout(() => {
        process.stdout.write('.');
      }, sortedNums[i] * 1000);
    }
  }
};

timer();