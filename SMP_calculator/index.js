const form = document.getElementById('Form');
const result = document.getElementById('result');
p = form.elements[0]
r = form.elements[1]
t = form.elements[2]
let res = null;
form.elements[3].addEventListener('click',(e)=>{
     e.preventDefault()
     res = (p.value*r.value*t.value)/100
     console.log(res)
     if(res == 0){
          result.innerText = "Please Enter value"
     }else{
          result.innerText = `Simple Interest : ${res}`
     }
})
form.elements[4].addEventListener('click',(e)=>{
     e.preventDefault()
     p.value = ''
     r.value = ''
     t.value = ''
     res = 0
     result.innerText = `Simple Interest : ${res}`
})

