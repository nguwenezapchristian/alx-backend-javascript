
export function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const i = 2;
        if (i == 2) {
            resolve('success');
        } else {
            reject('failed');
        }
    });
}