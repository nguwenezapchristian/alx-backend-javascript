/* eslint-disable */
export default function getStudentsByLocation(arr, city) {
    return arr.filter((value) => {
        if (value.location === city) {
            return value;
        }
    })
}