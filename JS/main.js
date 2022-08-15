const searchElement = document.querySelector("#search")

searchElement.addEventListener("keyup",event =>{
    // console.log(event);
    let searchQuery = event.target.value.toLowerCase()
    let itemElement = document.querySelectorAll(".item")

    for (let i = 0; i < itemElement.length; i++ ){
        const currenetItem=itemElement[i].textContent.toLowerCase()
        if (currenetItem.includes(searchQuery)) {
            itemElement[i].style.display="block"
        }
        else{
            itemElement[i].style.display="none"

        }
    }
})