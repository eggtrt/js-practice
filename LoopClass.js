var LoopClass = /** @class */ (function () {
    function LoopClass() {
        this.bonusGames = [];
        this.bonusGames = [1, 2, 3, 4, 5];
        // this.loopGames();
        this.loopGamesByFor();
    }
    LoopClass.prototype.setBonusGame = function (bonusGames) {
        this.bonusGames = bonusGames;
    };
    LoopClass.prototype.addBonusGame = function (bonusGame) {
        this.bonusGames.push(bonusGame);
    };
    LoopClass.prototype.loopGames = function () {
        for (var _i = 0, _a = this.bonusGames; _i < _a.length; _i++) {
            var bonusGame = _a[_i];
            console.log('this.bonusGames : ', this.bonusGames);
            console.log('bonusGame : ', bonusGame);
            if (bonusGame === 4) {
                console.log('push!');
                this.setBonusGame([1, 2, 3, 4, 5, 6]);
            }
        }
    };
    LoopClass.prototype.loopGamesByFor = function () {
        for (var i = 0; i < this.bonusGames.length; i++) {
            var bonusGame = this.bonusGames[i];
            console.log('[For] this.bonusGames : ', this.bonusGames);
            console.log('[For] bonusGame : ', bonusGame);
            if (bonusGame === 4) {
                console.log('push!');
                this.setBonusGame([1, 2, 3, 4, 5, 6]);
            }
        }
    };
    return LoopClass;
}());
var loopClass = new LoopClass();
