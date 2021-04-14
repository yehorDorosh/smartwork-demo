import '../css/style.scss';

function insertAfter(newNode, referenceNode) {
  if (referenceNode.parentNode)
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function setCursorAfterElement(elem) {
  if (!elem.childNodes[0]) return;
  elem.focus()
  const r = document.createRange();
  r.setStart(elem.childNodes[0], 1);
  r.setEnd(elem.childNodes[0], 1);

  const s = window.getSelection();
  s.removeAllRanges();
  s.addRange(r);
}

function splitElemBySpace(elem) {
  let stringArr = elem.innerText.split(/\s/);

  if (stringArr.length > 1) {
    stringArr.forEach((str, index) => {
      if (index != 0 && str) {
        const newIns = document.createElement('INS');
        const whitespace = document.createTextNode(' ');
        newIns.innerText = str;
        insertAfter(newIns, elem);
        insertAfter(whitespace, elem);
        setCursorAfterElement(newIns);
        elem.innerText = stringArr[0].trim();
      }
    });
  }
}

function concatTextBeforeElem(elem) {
  if (!elem.previousSibling) return;
    if (elem.previousSibling.nodeName === '#text') {
      const textNodeContent = elem.previousSibling.textContent;
      const textNodeContentArr = textNodeContent.split(/\s/);
      
      if (!textNodeContent.endsWith(' ') && textNodeContentArr.length > 1) {
        const lastWord = textNodeContentArr[textNodeContentArr.length - 1];
        elem.innerText = `${lastWord}${elem.innerText}`;
        elem.previousSibling.textContent = textNodeContent
          .substring(0, textNodeContent.lastIndexOf(lastWord));
        setCursorAfterElement(elem);
      }
    }
}

// Entry point
window.addEventListener('load', () => {
  const ediatbleArea = document.querySelector('[contenteditable="true"]');
  if (!ediatbleArea) return;


  ediatbleArea.addEventListener('input', e => {
    let insList = e.currentTarget.querySelectorAll('ins');
    if (!insList.length) return;
    insList = Array.from(insList);

    insList.forEach(elem => {
      // Split INS on by white space
      splitElemBySpace(elem);

      //Concat changes with INS. E.g. new<ins>test</ins> will become <ins>newtest</ins>
      concatTextBeforeElem(elem);
    });
  });
});
