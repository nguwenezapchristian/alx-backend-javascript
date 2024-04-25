import ClassRoom from './0-classroom';

export default function initializeRooms() {
  let array = [];
  const classroomObj = new ClassRoom(19);
  array.push(classroomObj);
  const classroomObj2 = new ClassRoom(20);
  array.push(classroomObj2);
  const classroomObj3 = new ClassRoom(34);
  array.push(classroomObj3);
  return array;
}
