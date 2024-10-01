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