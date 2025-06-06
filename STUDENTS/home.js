function Login() {
  let inputname = document.getElementById("inputname").value;
  let enroll = document.getElementById("enroll").value;
  let smsg = document.getElementById("s-msg");

  // Validation check
  if (inputname === "" || enroll === "") {
    smsg.innerText = "Please fill in all fields.";
    smsg.style.color = "red";
    smsg.style.textAlign = "center";
    return; // Stop function execution if fields are empty
  }

  const object = {
    Name: inputname,
    Enrollment: enroll,
  };

  let parse = localStorage.getItem("savedata");
  const array = JSON.parse(parse) || [];
  array.push(object);
  console.log(array);
  localStorage.setItem("savedata", JSON.stringify(array));

  alert("Data is saved");
  document.getElementById("slogin-sub").reset();
  window.location.href = "home.html";
  history.replaceState(null, null, "home.html"); // Replace login page in history
}

// ......................Request for gatepass..................................

function RequestPass() {
  let enrollno = document.getElementById("enrollno").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let reason = document.getElementById("rea-in").value;

  const object = {
    Enrollno: enrollno,
    Date: date,
    Time: time,
    Reason: reason,
  };

  let parse = localStorage.getItem("savereq");
  const array = JSON.parse(parse) || [];
  array.push(object);
  console.log(array);
  localStorage.setItem("savereq", JSON.stringify(array));

  alert("submitted");
  document.getElementById("pass-req").reset();
}
