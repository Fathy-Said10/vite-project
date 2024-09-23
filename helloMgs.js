 const helloMsg = (element) => {
    element.innerHTML = 'Hello'
    element.addEventListener('click', () => alert("hello"))
}

 const GoodbyeMsg = (element) => {
    element.innerHTML = 'Goodbye'
    element.addEventListener('click', () => alert("Goodbye"))
}

export default helloMsg
export {GoodbyeMsg}