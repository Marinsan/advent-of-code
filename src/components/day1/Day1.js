import n from './numbers.json'
export const Day1Mixins = {
    methods: {
        showDay1() {
            let array = []
            for (let i = 0; i < n.numbers.length; i++) {
                if (n.numbers[i] < 1000) {
                    for (let j = 0; j < n.numbers.length; j++) {
                        if ((n.numbers[i] + n.numbers[j]) === 2020) {
                            this.resultOne = 'Ex 1 -> ' + n.numbers[i] * n.numbers[j];

                        }
                    }
                }
            }
            this.showDay1Ex2(array)
        },
        showDay1Ex2() {
            for (let i = 0; i < n.numbers.length; i++) {
                for (let j = 0; j < n.numbers.length; j++) {
                    for (let k = 0; k < n.numbers.length; k++) {
                        if ((n.numbers[i] + n.numbers[j] + n.numbers[k]) === 2020) {
                            this.resultTwo ='Ex 2 -> ' + n.numbers[i] * n.numbers[j] * n.numbers[k];
                        }
                    }
                }
            }
        }
    }
}