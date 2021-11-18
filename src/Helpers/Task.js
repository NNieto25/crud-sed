const API_URL = 'localhost:3000';

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
            body: {
                text: text
            }
        }

        const response = await fetch(URL, request);
        const {
            success
        } = response.json();
        return success;

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
            body: {
                text: text
            }
        }

        const response = await fetch(URL, request);
        const {
            success
        } = response.json();

        return success;

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
        const {success} = response.json();
        return success;
        
    } catch (error) {
        console.error(error);
        return false;
    }
}