const student = [
    {name: "Kamal", id:12, address:"dhaka"},
    {name:"jamal", id: 13, address: "kushtia"}, 
    {name:"tomal" , id:14, address: "Rajshahi"}
]

const findName = student.map(s=> s.name)
const ids = student.map(s=>s.id);
const bigger = student.filter(s=> s.id >12);
const findParticular = student.find(s=> s.id >13);
console.log(findParticular);