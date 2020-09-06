function openNav()
{
   var navigationElement = document.getElementById("navigation");

   if (navigationElement.className === "navigation")
   {
       navigationElement.className += " menujs";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
   }
   else
   {
        navigationElement.className = "navigation";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
   } 
}