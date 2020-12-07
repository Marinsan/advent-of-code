import p from './passwords.json'

export const Day2Mixins = {
    methods: {
        showDay2() {
            let valid = 0;
            for (let i = 0; i < p.passwords.length; i++) {
                let password = p.passwords[i].split(' ');
                let min = parseInt(password[0].split('-')[0])
                let max = parseInt(password[0].split('-')[1])
                let search = password[2].search(password[1].split(':')[0])
                if (search >= min && search <= max) {
                    console.log(min, search, max)
                    valid = valid+1;
                }
            }
            this.resultOne = 'Ex1 -> ' + valid
            this.resultTwo = null;
        }
    }
}