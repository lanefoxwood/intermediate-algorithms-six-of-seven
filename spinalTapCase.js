function spinalCase(str) {
    return str
        .split(/_|\s|(?=[A-Z])/)
        .join('-')
        .toLowerCase();
  }
  
  console.log(spinalCase("AllThe-small Things"));

/*Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
0. edge case, where title-cased words are not separated by a white-space or non-word character. \b boundary comes to mind.
1. if the word is preceeded by a captial letter, split there
*/