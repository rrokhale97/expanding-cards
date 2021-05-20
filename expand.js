const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClassees()
        panel.classList.add('active')
    })
})
function removeActiveClassees(){
    panels.forEach(panel => panel.classList.remove('active'))
}
