/* eslint-disable */
export default function updateStudentGradeByCity(arr, city, grades) {
    return arr.filter((value) => value.location === city).map((value) => {
        for (let index = 0; index < grades.length; index++) {
            const element = grades[index];
            if (value.id === element.studentId && element.grade != null) {
                value['grade'] = element.grade;
                break;
            } else {
                value['grade'] = 'N/A';
            }
        }
        return value;
    });
}