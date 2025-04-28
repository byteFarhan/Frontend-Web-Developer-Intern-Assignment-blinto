const loadMoreBtn = document.getElementById("load-more-btn");
loadMoreBtn.addEventListener("click", () => {
  const hiddenCards = document.querySelectorAll(".testimonial-card.sm-hidden");

  // remove sm-hidden class
  hiddenCards.forEach((card) => card.classList.remove("sm-hidden"));

  // Hide button
  loadMoreBtn.style.display = "none";
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");

    // close others
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});
