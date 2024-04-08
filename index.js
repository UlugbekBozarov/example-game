while (true) {
  let isStart = confirm("O'yinni boshlaymizmi?");

  if (!isStart) {
    break;
  }

  let random = Math.floor(Math.random() * 100);
  let step = 0;

  let minNum = 0,
    maxNum = 100;

  while (true) {
    step++;
    let selectedNumber = prompt(
      `Men o'ylagan son ${minNum} va ${maxNum} oralig'ida. U nechi?`
    );

    if (selectedNumber == null) {
      alert("Xayr!");
      break;
    }

    selectedNumber = +selectedNumber;

    if (+selectedNumber == random) {
      alert(`Siz ${step} ta urinishda yutdingiz!!!`);
      break;
    }

    if (selectedNumber > random) {
      maxNum = Math.min(selectedNumber, maxNum);
    } else {
      minNum = Math.max(selectedNumber, minNum);
    }
  }
}
