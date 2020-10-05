/* eslint-disable no-undef */

const inputId = "answerFile";

$(".single").prepend(`<input type="file" id="${inputId}">`);

document.getElementById(inputId).addEventListener(
  "change",
  e => {
    const file = e.target.files;
    const reader = new FileReader();
    reader.readAsText(file[0]);
    reader.onload = () => {
      const csv = reader.result.split("\n").slice(1);
      console.log(csv);
      const data = csv
        .map(v => v.replace(/"/g, "").split(","))
        .map(v => [Number(v[0]), v[1], v[2] === "true"]);
      fill(data);
    };
  },
  false
);

const answerMap = {
  A: 0,
  B: 1,
  C: 2,
  D: 3
};

const fill = data => {
  console.log(data);
  const wrapper = $(".group");
  data.forEach(([i, answer, feeling]) => {
    const row = $(wrapper[i - 1]).find("input");
    row[answerMap[answer]].click();
    feeling && row[row.length - 1].click();
  });
};
