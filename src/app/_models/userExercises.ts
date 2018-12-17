export interface UserExercises {
    id: number;
    name: string;
    surname: string;
    exercises: [{
        id: number;
        name: string;
        muscleGroup: string;
        caloriesPerMinute: number;
    }];
}
