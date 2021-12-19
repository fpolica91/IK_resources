function fibonacci(n, memo) {
  memo = memo || {};
  if (n <= 1) {
    return (memo[n] = n);
  }
  if (memo[n]) return memo[n];
  return (memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo));
}

console.log(fibonacci(6, {}));
