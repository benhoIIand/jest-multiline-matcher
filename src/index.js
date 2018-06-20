import { multilineMessage } from './multiline_utils'

const NAME = `toEqualMultiline`

const toEqualMultiline = (received, expected) => {
  const expectedLines = expected.split(`\n`).map(s => s.trim()).filter(s => s !== ``);
  const receivedLines = received.split(`\n`).map(s => s.trim()).filter(s => s !== ``);

  const pass = expectedLines.reduce(
    (result, line, i) => !result ? result : line === receivedLines[i],
    true
  );
  const message = multilineMessage(pass, received, expected, NAME, `value`)

  // Passing the the actual and expected objects so that a custom reporter
  // could access them, for example in order to display a custom visual diff,
  // or create a different error message
  return { actual: received, expected, message, name: NAME, pass }
}

export default toEqualMultiline
