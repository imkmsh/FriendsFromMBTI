import {results} from './mbti.js';
import {mbtiResult} from './test.js';

function name() {
  location.href="/"+mbtiResult;
}

fetch("/result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/friend";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("결과 확인 중 에러 발생");
    });