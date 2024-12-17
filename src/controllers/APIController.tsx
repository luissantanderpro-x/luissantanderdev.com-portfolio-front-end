import { SERVER_API_URLS } from "../config/serverApiUrls";

class APIController {
    private readonly url: string; 

    public constructor() {
        console.log(process.env.REACT_APP_DEVELOPMENT_URL);

        if (process.env.REACT_APP_API_DEV_MODE) {
            this.url = SERVER_API_URLS.api_dev_url; 
        } else {
            this.url = SERVER_API_URLS.api_url; 
        }
    }

    public async handlePostRequest(payload: any, endpoint: string) {
        const post_url = this.url + endpoint; 
 
        let result: any = {}; 

        try {
            const response = await fetch(post_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); 
            }

            result = await response.json(); 

        } catch (error) {
            result = {
                error: 'Unable to reach server.....'
            }
        }

        return result; 
    }

    public async handleGetRequest(endpoint: string) {
        const get_url = endpoint; 

        let result: any = {}; 

        try {
            const response = await fetch(get_url);

            if (!response.ok) {
                throw new Error(`HTTP error! status ${response.status}`);
            }

            result = await response.json();

        } catch (error) {
            result = {
                error: 'Unable to reach server...'
            }
        }

        return result; 
    }
}

export default APIController; 