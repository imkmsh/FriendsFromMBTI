const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  password = document.querySelector("#password"),
  confirmpassword = document.querySelector("#confirm-password"),
  signupBtn = document.querySelector("#button");

signupBtn.addEventListener("click", signup);

function signup() {
  if (!id.value) return alert("아이디를 입력해주십시오.");
  if (password.value !== confirmpassword.value)
    return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
  };

  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
}