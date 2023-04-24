const controllers = document.querySelectorAll(".control input");

console.log(controllers);
function updateValue()
{
   console.log("dataset is:",this.dataset);
   const suffix=this.dataset.sizing || ' ';
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controllers.forEach(control=>console.log(control.dataset));

controllers.forEach(control=>control.addEventListener("change", updateValue));
controllers.forEach(control=>control.addEventListener("mousemove", updateValue));
