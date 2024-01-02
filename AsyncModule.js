
export async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 3000);
    });
}
