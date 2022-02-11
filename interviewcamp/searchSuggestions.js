function searchSuggestions(repository, customerQuery) {
  const sortedRepository = repository.sort();

  const results = [];
  for (let i = 0; i < customerQuery.length; i++) {
    const word = customerQuery.substring(0, i);
    const suggestions = [];
    for (let j = 0; j < sortedRepository.length; j++) {
      if (sortedRepository[j].startsWith(word)) {
        if (word.length >= 1) {
          suggestions.push(sortedRepository[j]);
        }
      }
    }
    if (suggestions.length > 0) {
      results.push(suggestions);
    }
  }
  return results;
}

console.log(
  searchSuggestions(
    ["code", "codePhone", "coddle", "coddles", "codes", "coddle"],
    "code"
  )
);
