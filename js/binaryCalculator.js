let result = ''

function appendToRes(value) {
  result += value
  document.getElementById('res').innerHTML = result
}

function clearRes() {
  result = ''
  document.getElementById('res').innerHTML = result
}

function calculateResult() {
  try {
    result = eval(result).toString(2) // Evaluate the expression and convert to binary
    document.getElementById('res').innerHTML = result
  } catch (e) {
    document.getElementById('res').innerHTML = 'Error'
  }
}
