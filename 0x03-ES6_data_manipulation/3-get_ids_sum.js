/* eslint-disable */
export default function getStudentIdsSum(arr) {
    return arr.map((value) => value.id).reduce((a, b) => a + b)
} 