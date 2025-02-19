function home(){
  document.getElementById("homes").style.color="rgb(20, 251, 20)";
  document.getElementById("plans").style.color="white";
  document.getElementById("contacts").style.color="white";
  document.getElementById("blogs").style.color="white";
  document.getElementById("programs").style.color="white";

}

function program(){
  document.getElementById("homes").style.color="white";
  document.getElementById("plans").style.color="white";
  document.getElementById("contacts").style.color="white";
  document.getElementById("blogs").style.color="white";
  document.getElementById("programs").style.color="rgb(20, 251, 20)";

}
function plan(){
  document.getElementById("homes").style.color="white";
  document.getElementById("plans").style.color="rgb(20, 251, 20)";
  document.getElementById("contacts").style.color="white";
  document.getElementById("blogs").style.color="white";
  document.getElementById("programs").style.color="white";

}
function blog(){
  document.getElementById("homes").style.color="white";
  document.getElementById("plans").style.color="white";
  document.getElementById("contacts").style.color="white";
  document.getElementById("blogs").style.color="rgb(20, 251, 20)";
  document.getElementById("programs").style.color="white";

}
function contact(){
  document.getElementById("homes").style.color="white";
  document.getElementById("plans").style.color="white";
  document.getElementById("contacts").style.color="rgb(20, 251, 20)";
  document.getElementById("blogs").style.color="white";
  document.getElementById("programs").style.color="white";

}

function sendOTP() {
  let phoneNumber = document.getElementById("phoneNumber").value;

  if (phoneNumber === "") {
      alert("Please enter a phone number!");
      return;
  }

  fetch("http://localhost:3000/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: phoneNumber }),
  })
  .then(response => response.json())
  .then(data => alert(data.message))
  .catch(error => console.error("Error:", error));
}

function verifyOTP() {
  let otp = document.getElementById("otpInput").value;

  fetch("http://localhost:3000/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp: otp }),
  })
  .then(response => response.json())
  .then(data => alert(data.message))
  .catch(error => console.error("Error:", error));
}
function toggleChat() {
  var chatBox = document.getElementById("chatBox");
  if (chatBox.style.display === "none" || chatBox.style.display === "") {
      chatBox.style.display = "block";
  } else {
      chatBox.style.display = "none";
  }
}

function sendMessage() {
  var userMessage = document.getElementById("userMessage").value;
  if (userMessage.trim() !== "") {
      alert("Your message: " + userMessage);
      document.getElementById("userMessage").value = ""; // Clear input
  } else {
      alert("Please enter a message!");
  }
}
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
window.onscroll = function () {
  console.log("Scroll detected:", window.scrollY);
};
// 🏋️‍♂️ Gym Modal Functionality
document.getElementById("gymMenu").addEventListener("click", function (event) {
  event.preventDefault(); 
  openGymModal();
});

function openGymModal() {
  document.getElementById("gymModal").style.display = "block";

  // Lucknow Gym List
  let gymList = [
      "Gold's Gym, Hazratganj",
      "Fitness First, Gomti Nagar",
      "Anytime Fitness, Aliganj",
      "Talwalkars Gym, Indira Nagar",
      "Muscle Factory, Rajajipuram"
  ];

  let listContainer = document.getElementById("gymList");
  listContainer.innerHTML = ""; 

  gymList.forEach(gym => {
      let li = document.createElement("li");
      li.textContent = gym;
      listContainer.appendChild(li);
  });
}

function closeGymModal() {
  document.getElementById("gymModal").style.display = "none";
}

// 📱 Toggle Mobile Menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

