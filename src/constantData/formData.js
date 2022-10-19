const Appointment = {
  title: "예약하기",
  radio: ["진료", "검진"],
  input: [
    { placeholder: "이름", name: "name" },
    { placeholder: "전화번호", name: "phoneNum" },
    { placeholder: "주민등록번호", name: "RRN" },
  ],
  notice: {
    title: "개인정보 수집∙이용 동의",
    content:
      "개인정보는 병원 정보 조회를 위해서만 사용됩니다. 개인정보 이용에 동의합니다. 비동의 시 온라인 병원 예약 서비스를 이용하실 수 없습니다.",
  },
  checkBtn: true,
  buttonContent: "확인",
};

const Confirm = {
  title: "예약조회",
  input: [
    { placeholder: "이름", name: "name" },
    { placeholder: "전화번호", name: "phoneNum" },
    { placeholder: "예약번호", name: "appointNum" },
  ],
  buttonContent: "조회",
  notice: {
    title: "예약번호를 잊은 경우",
    content:
      "☎︎ 1588-0323로 전화 후 성명과 전화번호, 주민등록번호를 알려주시면 유선상으로 예약조회 도와드리겠습니다.",
  },
  checkBtn: false,
  buttonContent: "조회",
};

export default { Appointment, Confirm };
