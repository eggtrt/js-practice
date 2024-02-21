class LoopClass {
    private bonusGames: number[] = [];
    constructor() {
        this.bonusGames = [1, 2, 3, 4, 5];
        this.loopGames();
        // this.loopGamesByFor();
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
            if (bonusGame === 3) {
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

//     private testIterator() {
//         const arr = [1, 2, 3];

// // arr은 이터러블이므로 [Symbol.iterator]() 메서드를 실행하여 이터레이터를 꺼낸다
// const iterator = arr[Symbol.iterator]();

// // 이터레이터 next() 메서드를 실행한다
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }
//     }
}

const loopClass = new LoopClass();