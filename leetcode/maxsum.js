const maxScore = function(cardPoints, k) {
  let leftHand = 0;
  let rightHand = 0;
  let result = 0;
  for (let i = 0; i < k; i++) {
    leftHand = leftHand + cardPoints[i];
  }
  result = leftHand;
  for(let j = k - 1; j >= 0; j--) {
    leftHand = leftHand - cardPoints[j]
    rightHand = rightHand + cardPoints[cardPoints.length - ( k - j)]
    result = Math.max(result, rightHand + leftHand);
  }
  return result;
}

maxScore([1,2,3,4,5,6,1], 3)

