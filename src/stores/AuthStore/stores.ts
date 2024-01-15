import { ExercisesStore } from "../ExercisesStore/ExercisesStore";
import { AuthStore } from "./AuthStore";

export const authStore = new AuthStore();

export const exercisesStore = new ExercisesStore();