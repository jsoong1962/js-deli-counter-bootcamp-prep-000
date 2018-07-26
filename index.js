let katzDeliLine = [];


function takeANumber(name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}.  You are number ${katzDeliLine.length} in line.`;
}

function currentLine(katzDeliLine) {
  let string = 'The line is currently: '; 
  if (katzDeliLine.length === 0) return 'The line is currently empty.';
  katzDeliLine.forEach((element, i) => string += `${i+1}. ${katzDeliLine[i]}, `);
  return string.slice(0, -2);
}

function nowServing() {
  if(katzDeliLine.length) return 'There is nobody waiting to be served';
  return `Currently server ${katzDeliLine.shift()}`;
}





