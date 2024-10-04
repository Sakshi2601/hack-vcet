function showCourseDetails(courseId) {
  // Show course details
  document.getElementById('course-details').classList.remove('hidden');

  // Populate course details dynamically
  if (courseId === 'course1') {
      document.getElementById('course-name').innerText = 'External Parts';
      document.getElementById('course-about').innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla quo minus, sequi enim aliquid accusamus blanditiis, laboriosam porro possimus rem quisquam sed illum aspernatur.';
  } else if (courseId === 'course2') {
      document.getElementById('course-name').innerText = 'Internal Parts';
      document.getElementById('course-about').innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla quo minus, sequi enim aliquid accusamus blanditiis, laboriosam porro possimus rem quisquam sed illum aspernatur.';
  } else if (courseId === 'course3') {
    document.getElementById('course-name').innerText = 'Cell Organelles';
    document.getElementById('course-about').innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla quo minus, sequi enim aliquid accusamus blanditiis, laboriosam porro possimus rem quisquam sed illum aspernatur.';
}
}

function closeCourseDetails() {
  document.getElementById('course-details').classList.add('hidden');
}

function submitFeedback(event) {
  event.preventDefault();
  const feedback = document.getElementById('feedback-text').value;
  if (feedback) {
      const feedbackDisplay = document.getElementById('feedback-display');
      feedbackDisplay.innerText = `Feedback: ${feedback}`;
      document.getElementById('feedback-form').reset();
  }
}




document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("login-btn");
  const profileBtn = document.getElementById("profile-btn");
  const logoutBtn = document.getElementById("logout-btn");

  // Function to check login status
  function checkLoginStatus() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      loginBtn.style.display = 'none';  // Hide login button
      profileBtn.style.display = 'inline-block'; // Show profile button
      logoutBtn.style.display = 'inline-block'; // Show logout button
    } else {
      loginBtn.style.display = 'inline-block'; // Show login button
      profileBtn.style.display = 'none';  // Hide profile button
      logoutBtn.style.display = 'none';  // Hide logout button
    }
  }

  // Event listener for login button
  loginBtn.addEventListener("click", function() {
    localStorage.setItem('loggedIn', 'true');
    checkLoginStatus();
  });

  // Event listener for logout button
  logoutBtn.addEventListener("click", function() {
    localStorage.setItem('loggedIn', 'false');
    alert("You have been logged out.");
    checkLoginStatus();
  });

  // Event listener for profile button (can add more functionality here)
  profileBtn.addEventListener("click", function() {
    alert("Welcome to your profile!");
    // Redirect to profile page if needed
  });

  // Initialize the buttons based on login status
  checkLoginStatus();
});
