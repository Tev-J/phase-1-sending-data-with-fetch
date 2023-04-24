// Add your code here
function submitData(userName, userEmail) {
  const post = fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: `${userName}`,
      email: `${userEmail}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => handleRes(data.id))
    .catch((error) => handleRes(error.message));
  return post;
}

function handleRes(data) {
  let p = document.createElement("p");
  p.textContent = data;

  document.querySelector("body").appendChild(p);
}
