
class APIController {
    private readonly url: string; 

    public constructor() {
        this.url = 'http://localhost:8000'
    }

    public async handlePostRequest(payload: any, endpoint: string) {
        const post_url = this.url + endpoint; 

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

            const result = await res.json(); 

            console.log(result); 

        } catch (error) {
            console.error('Error during POST Request', error); 
        }
    }
}


export default APIController; 