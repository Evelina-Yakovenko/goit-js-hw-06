const categories = document.querySelector("#categories")

const categoryItem = document.querySelectorAll(".item")
console.log("Number of categories:", categoryItem.length)

categoryItem.forEach(function (item, idx, arr) {
     const lastElement = item.lastElementChild;
    console.log("Category:", item.firstElementChild.textContent),
    console.log("Elements:", lastElement.children.length)    
})