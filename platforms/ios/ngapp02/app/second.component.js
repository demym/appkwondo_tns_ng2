"use strict";
var core_1 = require("@angular/core");
var SecondComponent = (function () {
    function SecondComponent() {
        this.counter = 16;
        this.stocaz = "stafuncia";
        this.lvitems = ["caz", "minck", "vaff"];
    }
    Object.defineProperty(SecondComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    SecondComponent.prototype.onTap = function () {
        this.counter--;
        this.stocaz = "ma vaffanculo " + this.counter;
        if (this.counter == 0)
            this.stocaz = "hai finito coglione";
    };
    SecondComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "second.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], SecondComponent);
    return SecondComponent;
}());
exports.SecondComponent = SecondComponent;
//# sourceMappingURL=second.component.js.map