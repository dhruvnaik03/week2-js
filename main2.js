
const importAsyncModule = async () => {
    try {

        const asyncModule = await import('./asyncModule.js');

       
        const result = await asyncModule.fetchData();

        console.log(result);
    } catch (error) {
        console.error('Error loading asyncModule:', error);
    }
};

importAsyncModule();
