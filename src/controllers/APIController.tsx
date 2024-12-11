import { SERVER_API_URLS } from "../config/serverApiUrls";

class APIController {
    private readonly url: string; 

    public constructor() {
        this.url = SERVER_API_URLS.api_url; 
    }

    public async handlePostRequest(payload: any, endpoint: string) {
        const post_url = this.url + endpoint; 
 
        let result: any = {}; 

        try {
            const res = await fetch(post_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                }, 
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`); 
            }

            result = await res.json(); 

        } catch (error) {
            console.error('Error during POST Request', error); 
            result = {
                error: 'Unable to reach server.....'
            }
        }

        return result; 
    }
}

export default APIController; 