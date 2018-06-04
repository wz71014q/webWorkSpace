function init () {
  var student = new Student('qian', 21, '一年级');
  console.log('student = ' + student);
  console.log('name = ' + student.name + ', age = ' + student.age + ', grade = ' + student.age);
}
function Person (name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}
function Student (name, age, grade) {
  Person.apply(this, arguments);
  this.grade = grade;
  console.log(this);
}
window.onload = function () {
  init();
}
