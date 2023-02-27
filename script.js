const nine = document.querySelector('.nine')
const eight = document.querySelector('.eight')
const seven = document.querySelector('.seven')
const six = document.querySelector('.six')
const five = document.querySelector('.five')
const four = document.querySelector('.four')
const three = document.querySelector('.three')
const two = document.querySelector('.two')
const one = document.querySelector('.one')
const zero = document.querySelector('.zero')


//operators
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const dot = document.querySelector('.dot')
const remove = document.querySelector('.remove')

//operators events 
dot.addEventListener('click', () => {
  calculator__conclusion.innerHTML += dot.innerHTML
})
plus.addEventListener('click', () => {
  calculator__conclusion.innerHTML += plus.innerHTML
})
minus.addEventListener('click', () => {
  calculator__conclusion.innerHTML += minus.innerHTML
})
multiply.addEventListener('click', () => {
  calculator__conclusion.innerHTML += multiply.innerHTML
})
divide.addEventListener('click', () => {
  calculator__conclusion.innerHTML += divide.innerHTML
})
//numbers events
const calculator__conclusion = document.querySelector('.calculator__conclusion')
nine.addEventListener('click', () => {
  calculator__conclusion.innerHTML += nine.innerHTML
})
eight.addEventListener('click', () => {
  calculator__conclusion.innerHTML += eight.innerHTML
})
seven.addEventListener('click', () => {
  calculator__conclusion.innerHTML += seven.innerHTML
})
six.addEventListener('click', () => {
  calculator__conclusion.innerHTML += six.innerHTML
})
five.addEventListener('click', () => {
  calculator__conclusion.innerHTML += five.innerHTML
})
four.addEventListener('click', () => {
  calculator__conclusion.innerHTML += four.innerHTML
})
three.addEventListener('click', () => {
  calculator__conclusion.innerHTML += three.innerHTML
})
two.addEventListener('click', () => {
  calculator__conclusion.innerHTML += two.innerHTML
})
one.addEventListener('click', () => {
  calculator__conclusion.innerHTML += one.innerHTML
})
zero.addEventListener('click', () => {
  calculator__conclusion.innerHTML += zero.innerHTML
})

remove.addEventListener('click', () => {
  calculator__conclusion.innerHTML  = ''
})
