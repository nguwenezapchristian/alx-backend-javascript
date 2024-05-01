/* eslint-disable */
interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: "Nguweneza",
    lastname: "Chris",
    age: 24,
    location: "Kigali",
}

const student2: Student = {
    firstname: "Muganwa",
    lastname: "Willy",
    age: 23,
    location: "Huye",
}
const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    studentsList.forEach((student) => {
        const row = document.createElement("tr");
        const firstName = document.createElement("td");
        const location = document.createElement("td");

        firstName.textContent = student.firstname;
        location.textContent = student.lastname;

        row.appendChild(firstName);
        row.appendChild(location);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
});