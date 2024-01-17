import { action, autorun, makeObservable, observable } from "mobx";
import { EXERCISES_FETCH_ALL } from "../../constants/api-endpoints.constants";
import { IExercise } from "../../interfaces/interfaces";
import RestService from "../AuthStore/rest.service";

export class ExercisesStore {
  public exercises: IExercise[];

  constructor() {
    this.exercises = [];

    makeObservable(this, {
      exercises: observable,

      setExercisesList: action,
    });

    autorun(() => this.getExercises());
  }

  public setExercisesList(exercises: IExercise[]) {
    this.exercises = exercises;
  }

  public async getExercises(): Promise<void> {
    try {
      const result = await RestService.get<IExercise[]>(EXERCISES_FETCH_ALL);

      this.setExercisesList(result.data);
    } catch (error) {
      console.error(error);
    }
  }
}
