// HAMBURGER OPERATOR.
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-items');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// EXPERIENCES TAB MANAGER.

let exps = [["exp-1", "exp-1-content"], ["exp-2", "exp-2-content"], ["exp-3", "exp-3-content"], ["exp-4", "exp-4-content"], ["exp-5", "exp-5-content"]];

function showExp(id) {

    exps.forEach(([x, y]) => {
        if (y === id) {
            document.getElementById(x).classList.add("active");
            document.getElementById(y).style.display = "block";
        } else {
            document.getElementById(x).classList.remove("active");
            document.getElementById(y).style.display = "none";
        }
    })
}

// AWARDS TAB MANAGER.

let awards = [["awards-1", "awards-1-content"], ["awards-2", "awards-2-content"], ["awards-3", "awards-3-content"], ["awards-4", "awards-4-content"], ["awards-5", "awards-5-content"]];

function showAwards(id) {
    awards.forEach(([x, y]) => {
        if (y === id) {
            document.getElementById(x).classList.add("active");
            document.getElementById(y).style.display = "block";
        } else {
            document.getElementById(x).classList.remove("active");
            document.getElementById(y).style.display = "none";
        }
    })
}