import { action, makeObservable, observable } from "mobx";
import { EXERCISES_FETCH_ALL } from "../../constants/api-endpoints.constants";
import { IExercise } from "../../interfaces/interfaces";
import RestService from "../AuthStore/rest.service";

export class ExercisesStore {
  public exercise: IExercise[] | null;

  constructor() {
    this.exercise = null;

    makeObservable(this, {
      exercise: observable,

      setExercisesList: action,
    });
  }

  public setExercisesList(exercise: IExercise[]) {
    this.exercise = exercise;
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
