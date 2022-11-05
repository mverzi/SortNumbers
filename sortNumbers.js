/**
 * This function sorts an array of numbers
 * @param {*} nums An array of numbers
 * @returns nums sorted
 */
function solution(nums){
    return nums != null ? nums.sort((a,b) => a-b) : []
  }