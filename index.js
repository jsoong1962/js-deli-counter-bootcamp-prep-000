let katzDeliLine = [];


function takeANumber(name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}.  You are number ${katzDeliLine.length}`;
}

function currentLine(katzDeliLine) {
  let string = 'The line is currently: '; 
  katzDeliLine.forEach((element, i) => string += `${i+1}: ${katzDeliLine[i]}, `);
  return string.slice(0, -2);
}

function nowServing() {
  return `Currently server ${katzDeliLine.shift()}`
}

const nowServing = () => {};



