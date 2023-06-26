//const expandbutton = document.querySelectorAll('.expand-button')
//const cardbody = document.querySelectorAll('.card-body')
//const cardbodyshow = document.querySelectorAll('.card-body show')

//expandbutton.forEach("click", () => {

//})

document.addEventListener("click", e => {
    if (!e.target.matches('.expand-button')) return

    const card = e.target.closest('.card')
    const cardbody = card.querySelector('.card-body')

    cardbody.classList.toggle("show")
    e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"
    //condn         ex1        ex2
    //                      if condn true ex1 else ex2 

    // if (e.target.innerText === "Exapnd") {
    //      e.target.innerText = "Collapse"
    //  } else {
    //       e.target.innerText = "Expand"
    //   }

})