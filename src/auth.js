import axios from 'axios';

const BASE_URL = 'https://nandha28.pythonanywhere.com/auth';  // Replace with your PyAnywhere domain

// Create axios instance with base configuration
const auth = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Example API calls
export const apiService = {
    // Login
    login: async (credentials) => {
        try {
            const response = await api.post('/login/', credentials);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Get data
    getData: async () => {
        try {
            const response = await auth.get('/data/');
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Add more API calls as needed
};

export default auth;
```

### Example Component Usage
```javascript
import React, { useState, useEffect } from 'react';
import { apiService } from '../auth';

function Dashboard() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiService.getData();
                setData(response);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        
            {error && Error: {error}}
            {data && {JSON.stringify(data, null, 2)}}
        
    );
}

export default Dashboard;
