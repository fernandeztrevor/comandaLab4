import { User } from './user';

export class Product 
{
    public codeID: string;
    public name: string;
    public pathImg: string;
    public price: number;
    public foodTypes: FoodType[];
    public state: FoodState;
    public cook: Cook;
    public worker: User;

    constructor()
    {
        this.codeID = "";
        this.name = "";
        this.pathImg = "";
        this.price = -1;
        this.foodTypes = [];
        this.state = FoodState.pending;
    }
    
    public IsFoodType(type: string): boolean
    {
        return this.foodTypes.includes(type as FoodType);
    }

    public static Create(code: string, name: string, pathImg: string, price: number, foodTypes: FoodType[], cook: Cook)
    {
        let newProd = new Product();
        newProd.codeID = code;
        newProd.name = name;
        newProd.pathImg = pathImg;
        newProd.price = price;
        newProd.foodTypes = foodTypes;
        newProd.cook = cook;
        return newProd;
    }
}

export enum FoodType
{
    comida = 'comida',
    bebida = 'bebida',
    postre = 'postre',
    alcohol = 'alcohol',
    celiaco = 'celiaco',
    vegano = 'vegano'
}

export enum FoodState
{
    pending = 'Pendiente',
    preparing = 'Preparándose',
    finished = 'Terminando'
}

export enum Cook
{
    cocinero = 'cocinero',
    cervecero = 'cervecero',
    bartender = 'bartender',
}