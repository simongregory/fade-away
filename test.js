import test from 'ava';
import backoff from '.';

test('exponential', t => {
  t.is(backoff.exponential(0, 10), 10);
  t.is(backoff.exponential(1, 10), 20);
  t.is(backoff.exponential(2, 10), 40);
  t.is(backoff.exponential(3, 10), 80);
  t.is(backoff.exponential(4, 10), 160);
  t.is(backoff.exponential(5, 10), 320);
  t.is(backoff.exponential(6, 10), 640);
  t.is(backoff.exponential(7, 10), 1280);
  t.is(backoff.exponential(8, 10), 2560);
});

test('exponential using floats', t => {
  t.is(backoff.exponential(4, 10), 160);
  t.is(backoff.exponential(4.1, 10), 171);
  t.is(backoff.exponential(4.5, 10), 226);
  t.is(backoff.exponential(4.9, 10), 298);
  t.is(backoff.exponential(5, 10), 320);
});

test('exponential with negative integers', t => {
  t.is(backoff.exponential(-1, 10), 5);
  t.is(backoff.exponential(-2, 10), 2);
  t.is(backoff.exponential(-3, 10), 1);
  t.is(backoff.exponential(-4, 10), 0);
  t.is(backoff.exponential(-5, 10), 0);
  t.is(backoff.exponential(-10000, 10), 0);
});

test('exponential has a default delay of 1000', t => {
  t.is(backoff.exponential(5), 32000);
});

test('exponential does not go on for ever', t => {
  t.is(backoff.exponential(43), 8796093022208000);
  t.throws(() => {
    backoff.exponential(44);
  }, /Exponential result exceeded MAX_SAFE_INTEGER/);
});

test('exponential around the hour limit', t => {
  const ONE_HOUR = 1000 * 60 * 60;
  t.true(backoff.exponential(11) < ONE_HOUR);
  t.true(backoff.exponential(12) > ONE_HOUR);
});

test('fibonacci', t => {
  t.is(backoff.fibonacci(0, 10), 10);
  t.is(backoff.fibonacci(1, 10), 10);
  t.is(backoff.fibonacci(2, 10), 20);
  t.is(backoff.fibonacci(3, 10), 30);
  t.is(backoff.fibonacci(4, 10), 50);
  t.is(backoff.fibonacci(5, 10), 80);
  t.is(backoff.fibonacci(6, 10), 130);
  t.is(backoff.fibonacci(7, 10), 210);
  t.is(backoff.fibonacci(8, 10), 340);
});

test('fibonacci using floats', t => {
  t.is(backoff.fibonacci(4, 10), 50);
  t.is(backoff.fibonacci(4.1, 10), 80);
  t.is(backoff.fibonacci(4.9, 10), 80);
  t.is(backoff.fibonacci(5, 10), 80);
});

test('fibonacci has a default delay of 1000', t => {
  t.is(backoff.fibonacci(5), 8000);
});

test('fibonacci does not go on for ever', t => {
  t.is(backoff.fibonacci(62), 6557470319842000);
  t.throws(() => {
    backoff.fibonacci(63);
  }, /Fibonacci result exceeded MAX_SAFE_INTEGER/);
});

test('fibonacci around the hour limit', t => {
  const ONE_HOUR = 1000 * 60 * 60;
  t.true(backoff.fibonacci(17) < ONE_HOUR);
  t.true(backoff.fibonacci(18) > ONE_HOUR);
});

test('fibonacci treats negative integers as 0', t => {
  t.is(backoff.fibonacci(-1, 10), 10);
});
