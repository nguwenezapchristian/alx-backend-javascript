export default function guardrail(mathFunction) {
  const queue = [];

  // eslint-disable-next-line func-names
  return function (...args) {
    try {
      queue.push(mathFunction(...args));
    } catch (error) {
      queue.push(error.message);
    }
    queue.push('Guardrail was processed');

    return queue;
  };
}
