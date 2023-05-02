const resume_btn1 = document.querySelector("#resume-button-1");
const resume_btn2 = document.querySelector("#resume-button-2");

resume_btn1.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/13NOplGRKospEeCsnxJYPL8iGWhwKR5h8/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=13NOplGRKospEeCsnxJYPL8iGWhwKR5h8";
});

resume_btn2.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/file/d/13NOplGRKospEeCsnxJYPL8iGWhwKR5h8/view?usp=sharing"
  );
  window.location.href =
    "https://drive.google.com/uc?export=download&id=13NOplGRKospEeCsnxJYPL8iGWhwKR5h8";
});