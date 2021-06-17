class Food {
    constructor() {
        this.foodstoke = 0,
            this.image = loadImage("images/Milk.png"),
            this.lastFeed
    }
    updateFoodStock(foodstoke) {
        this.foodstoke = foodstoke;
    }
    getFedTime(lastFeed) {
        this.lastFeed = lastFeed;
    }

    deductFood() {
        if (this.foodstoke > 0) {
            this.foodstoke = this.foodstoke - 1;
        }
    }

    getFoodStoke() {
        return this.foodstoke;
    }


    display() {
        var x = 80,
            y = 100;
        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if (this.foodstoke != 0) {
            for (var i = 0; i < this.foodstoke; i++) {
                if (i % 10 == 0) {
                    x = 80
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x + 30
            }
        }

    }

}