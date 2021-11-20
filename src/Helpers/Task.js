const API_URL = 'http://127.0.0.1:3000';

export const getTasks = async () => {
    try {
        const URL = `${API_URL}/tasks/`;
        const response = await fetch(URL);
        const {
            tasks
        } = await response.json();
        return tasks;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const createTask = async (text) => {
    try {
        const URL = `${API_URL}/tasks/create`;

        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: text })
        }
        const response = await fetch(URL, request);
        const {ok} = response.json();
        console.log(ok);
        return ok;

    } catch (error) {
        console.error(error);
        return false;
    }
}

export const updateTask = async (taskId, text) => {
    try {
        const URL = `${API_URL}/tasks/update/${taskId}`;
        const request = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: text })
        }

        const response = await fetch(URL, request);
        const {ok} = response.json();
        console.log(ok);
        return ok;

    } catch (error) {
        console.error(error);
        return false;
    }
};

export const deleteTask = async (taskId) => {
    try {
        const URL = `${API_URL}/tasks/delete/${taskId}`;
        const request = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        };

        const response = await fetch(URL, request);
        const {ok} = response.json();
        console.log(ok);
        return ok;
        
    } catch (error) {
        console.error(error);
        return false;
    }
}