export const getDataTodo = async () => {

    try {

        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const req = await fetch(process.env.REACT_APP_API_URL, options);
        const res = req.json();
        return res;

    } catch (err) {
        console.log('Error: ', err);
    }

}