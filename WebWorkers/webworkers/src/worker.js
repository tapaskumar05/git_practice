/* eslint-disable no-restricted-globals */
export default () => {
  self.addEventListener("message", e => {
    if (!e) return;
    const data = e.data;
    const value = data.value;
    for (let i = 1; i <= 20; i += 1) {
        setTimeout(() => {
            // self.postMessage(`${value} X ${i} = ${value*i}`);
            // self.postMessage(`${value*i} Dots`);
            let dots = '';
            for (let j = 1; j <= i * value; j += 1) {
                dots += 'O- ';
            }
            self.postMessage(`${dots}`);
            if ( i === 20) {
                setTimeout(() => {
                    console.clear();
                });
            }
        }, i * 300);
    }
  });
};
