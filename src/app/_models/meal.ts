export interface Meal {
    id: number;
    name: string;
    kcal: number;
    proteins: number;
    carbohydrates: number;
    fat: number;
    products: [{
        name: string;
        kcal: number;
        proteins: number;
        carbohydrates: number;
        fat: number;
    }];
}
