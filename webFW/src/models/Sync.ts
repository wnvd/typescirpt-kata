import axios, { AxiosResponse } from 'axios';



export class Sync {
    
    fetch(): void {
        const id = this.get('id');
        axios.get(`http://localhost:4000/users/${id}`)
            .then((res: AxiosResponse): void => {
                this.set(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    save(): void {
        const id = this.get('id');
        if (this.get('id')) {
            axios.put(`http://localhost:4000/users/${id}`, this.data);
        } else {
            axios.post('http://localhost:4000/users', this.data);
        }
    }

}
