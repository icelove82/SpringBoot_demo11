/**
 * Function readme
 * * It is normal
 * ! This is important
 * ? This is a function
 * TODO add a log later
 * @param name the name of the param
 */
function showClickMe() {
  alert("You click me!");
}

function getService() {
  $.ajax({
    type: "PATCH",
    url: "http://localhost:8080/update/109",
    async: true,
    success: function(data) {
      alert(`Success : ${data}`);
    },
    error: function(xhr, status, error) {},
    complete: function(data) {}
  });
}

window.onload = function() {
  document.getElementById("photo1").addEventListener("click", showClickMe);
  document.getElementById("photo2").addEventListener("click", getService);
};
