
var StockSpanner = function() {
    this.prices = []
    };

    /**
     * @param {number} price
     * @return {number}
     */
    StockSpanner.prototype.next = function(price) {
        let c = 1
            while (this.prices.length>0 && price>=this.prices[this.prices.length-1][0]) { //go left in our condensed array
          c+= this.prices[this.prices.length-1][1]; //add the grouped counts of smaller elements
          this.prices.pop(); // get rid of < values now that we've got their count, elim unnecessary data
        }

        this.prices.push([price,c])
        return c
    };

StockSpanner(["StockSpanner","next","next","next","next","next","next","next"]
[[],[100],[80],[60],[70],[60],[75],[85]])

console.log(StockSpanner.next())
