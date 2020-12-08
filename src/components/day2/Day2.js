import p from './passwords.json'

export const Day2Mixins = {
    methods: {
        showDay2() {
            let valid = 0;
            for (let i = 0; i < p.passwords.length; i++) {
                let password = p.passwords[i].split(' ');
                let letter = password[1].split(':')[0];
                let min = parseInt(password[0].split('-')[0]);
                let max = parseInt(password[0].split('-')[1]);
                let search = password[2].split(letter).length - 1;
                if (search >= min && search <= max) {
                    valid++;
                }
            }
            this.resultOne = 'Ex1 -> ' + valid;
            this.showExDay2();
        },
        showExDay2() {
            let valid = 0;
            for (let i = 0; i < p.passwords.length; i++) {
                let password = p.passwords[i].split(' ');
                let letter = password[1].split(':')[0];
                let min = parseInt(password[0].split('-')[0]);
                let max = parseInt(password[0].split('-')[1]);
                let search = password[2].split('');
                if (search[min - 1] === letter && search[max - 1] != letter || search[min - 1] != letter && search[max - 1] === letter) {
                    valid++;
                }
            }
            this.resultTwo = 'Ex2 -> ' + valid;
        }
    }
}