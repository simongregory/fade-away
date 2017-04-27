const DEFAULT_DELAY = 1000;

function exponential(attempt, delay = DEFAULT_DELAY) {
  const result = Math.floor(Math.pow(2, attempt) * delay);

  if (result > Number.MAX_SAFE_INTEGER) {
    throw new Error('Exponential result exceeded MAX_SAFE_INTEGER');
  }

  return result;
}

function fibonacci(attempt, delay = DEFAULT_DELAY) {
  let current = 1;

  if (attempt > current) {
    current = 2;
    let prev = 1;

    for (let index = 2; index < attempt; index++) {
      const next = prev + current;
      prev = current;
      current = next;

      if (Math.floor(current * delay) > Number.MAX_SAFE_INTEGER) {
        throw new Error('Fibonacci result exceeded MAX_SAFE_INTEGER');
      }
    }
  }

  return Math.floor(current * delay);
}

module.exports = { exponential, fibonacci };
