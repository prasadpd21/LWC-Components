import { LightningElement } from 'lwc';

export default class CheckPassword extends LightningElement {
    Password;


    validate_User(password) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (password == "Prasad21") {
                    resolve("User Verified")
                }
                else {
                    reject("Invalid User")
                }

            }, 2000)
        })
    }

    handleChange(event) {
        this.Password = event.target.value;
        let response = this.template.querySelector('p');
        response.innerHTML = '';
    }
    
    async handleClick() {
        try {

            const result = await this.validate_User(this.Password);
            console.log(result);
            let response = this.template.querySelector('p');
            response.innerHTML = 'User Verified';
        }
        catch (e) {
            console.log(e);
            let response = this.template.querySelector('p');
            response.innerHTML = 'Invalid User';
        }

    }

}