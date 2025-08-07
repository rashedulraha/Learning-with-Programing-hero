const number = [1, 2, 3, 5, 6, 7, 8, 9];

const tournamentRuns = [[], [], [], []];
const examMarks = [
  [14, 22, 3, 5, 62, 7, 28, 29, 12],
  [12, 22, 34, 52, 64, 27, 8, 29],
  [13, 2, 3, 5, 64, 7, 28, 29],
  [12, 2, 3, 53, 62, 7, 28, 29],
  [15, 2, 3, 53, 6, 7, 28, 29],
  [16, 22, 35, 54, 62, 72, 28, 29],
];

examMarks[0].pop();
examMarks[0].unshift(21);

console.log(examMarks[0]);
