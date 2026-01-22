button.addEventListener("click", async () => {
    await fetch("http://localhost:3000/", {method: "POST"})
    alert("10 Employees data successfully generated and previous record deleted!")
})