class LoopClass {
    private bonusGames: number[] = [];
    constructor() {
        this.bonusGames = [1, 2, 3, 4, 5];
        // this.loopGames();
        this.loopGamesByFor();
    }

    private setBonusGame(bonusGames: number[]) {
        this.bonusGames = bonusGames;
    }

    private addBonusGame(bonusGame: number) {
        this.bonusGames.push(bonusGame);
    }

    private loopGames() {
        for (const bonusGame of this.bonusGames) {
            console.log('this.bonusGames : ', this.bonusGames);
            console.log('bonusGame : ', bonusGame);
            if (bonusGame === 4) {
                console.log('push!');
                this.setBonusGame([1,2,3,4,5,6]);
            }
        }
    }

    private loopGamesByFor() {
        for (let i = 0; i < this.bonusGames.length; i++) {
            const bonusGame = this.bonusGames[i];
            console.log('[For] this.bonusGames : ', this.bonusGames);
            console.log('[For] bonusGame : ', bonusGame);
            if (bonusGame === 4) {
                console.log('push!');
                this.setBonusGame([1,2,3,4,5,6]);
            }
        }
    }
}

const loopClass = new LoopClass();