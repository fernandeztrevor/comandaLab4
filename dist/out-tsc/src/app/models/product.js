export class Product {
    constructor() {
        this.codeID = "";
        this.name = "";
        this.image = "";
        this.price = -1;
        this.foodTypes = [];
        this.state = FoodState.pending;
        this.demand = 0;
    }
    IsFoodType(type) {
        return this.foodTypes.includes(type);
    }
    static Create(code, name, image, price, foodTypes, cook, description) {
        let newProd = new Product();
        newProd.codeID = code;
        newProd.name = name;
        newProd.image = image;
        newProd.price = price;
        newProd.foodTypes = foodTypes;
        newProd.cook = cook;
        newProd.description = description;
        return newProd;
    }
}
export var FoodType;
(function (FoodType) {
    FoodType["comida"] = "comida";
    FoodType["bebida"] = "bebida";
    FoodType["postre"] = "postre";
    FoodType["alcohol"] = "alcohol";
    FoodType["celiaco"] = "celiaco";
    FoodType["vegano"] = "vegano";
})(FoodType || (FoodType = {}));
export var FoodState;
(function (FoodState) {
    FoodState["pending"] = "Pendiente";
    FoodState["preparing"] = "Prepar\u00E1ndose";
    FoodState["finished"] = "Terminando";
})(FoodState || (FoodState = {}));
export var Cook;
(function (Cook) {
    Cook["cocinero"] = "cocinero";
    Cook["cervecero"] = "cervecero";
    Cook["bartender"] = "bartender";
})(Cook || (Cook = {}));
//# sourceMappingURL=product.js.map