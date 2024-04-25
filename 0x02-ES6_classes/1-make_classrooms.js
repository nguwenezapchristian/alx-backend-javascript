import ClassRoom from './0-classroom';

export default function initializeRooms() {
  let array = [];
  const classRoomObj = new ClassRoom(19);
  array.push(classRoomObj);
  const classRoomObj2 = new ClassRoom(20);
  array.push(classRoomObj2);
  const classRoomObj3 = new ClassRoom(34);
  array.push(classRoomObj3);
  return array;
}
