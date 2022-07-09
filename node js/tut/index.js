console.log("hello world");

student = {
    fname : "krish",
    lname : "kharal",
    id: 1,
    address : "Bayatari",
    details: function(){
        return "My name is : "+this.fname +" "+ this.lname;
    }
}

// console.log(student.fname);
// console.log(student.details());

module.exports = {student};