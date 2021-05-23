function randomValue(threshhold = 0) {
    return Math.floor((Math.random() * 10 + threshhold));
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            powerGenerate: 0,
        };
    },
    computed: {
        playerCalculatedHealth() {
            return { width: this.playerHealth + '%'}
        },
        monsterCalculatedHealth() {
            return { width: this.monsterHealth + '%'}
        },
        checkRound() {
            return this.powerGenerate >= 3 ? false : true;
        }
    },
    methods: {
        attackMonster() {
            const attackValue = randomValue();
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.powerGenerate++;
        },
        attackPlayer() {
            const attackValue = randomValue();
            this.playerHealth -= attackValue;
        },
        specialAttack() {
            const attackValue = randomValue(10);
            this.monsterHealth -= attackValue;
            this.attackPlayer()
            this.powerGenerate = 0;
        },
        healPlayer() {
            const healthBoost = randomValue(5);
            if((this.playerHealth + healthBoost) <= 100) {
                this.playerHealth += healthBoost;
            } else {
                this.playerHealth = 100;
            }
            this.attackPlayer()
            this.powerGenerate = 0;
        }
    },
    watch: {

    }
});

app.mount('#game');