/* eslint-disable */
export default function getStudentsByLocation(arr, city) {
    return arr.filter((value) => value.location === city)
}