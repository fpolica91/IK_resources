## Function mergeArrays (array1[], array2[], result[])
 ### Description: Merges two arrays into one array, only works with sorted arrays
  ### Parameters:
    - A[]
    - B[]
    - C[]
  ### Procedure
    - define variables i, j, k set to 0, these variables will define the index of array A B or C
    - define size of A, B
    - test if A[i] < B[j]
      - if true, then result[k] = A[i]
      - increment i++
      - increment k++
    - else
      - result[k] = B[j]
      - increment j++
      - increment k++
    - this loop should executed until i < size of A or j < size of B 
    
## Special Case:
### Description:
  - if i < size of A or j < size of B `BUT NOT BOTH!!` 
    - `NOTICE` we don't initialize i or j, we simply start the loop from the index that's out of range of the while loop
      meaning, if i < `sizeof` but B > `sizeof` j, this means that A has more elments than B, so the for loop below, 
      will start at last index that came out of the while loop. 
    - if i < size of A
      - for i < size of A; i++
        - result[k] = A[i]
        - increment k++
    - else if j < size of B
      - for j < size of B; j++
        - result[k] = B[j]
        - increment k++
    
  
### Function mergeSingle(array, low, mid, high)
  ### Description: Merges and sorts single array
