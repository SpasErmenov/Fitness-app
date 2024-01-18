import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CreateWorkout } from "../components/CreateWorkout/CreateWorkout";
import { ExercisesPage } from "./Exercises/ExercisesPage";
import {
  CREATE_WORKOUT_PAGE,
  EXERCISES_PAGE,
  HOME_PAGE,
  ROOT,
} from "./paths.constants";
import { HomePage } from "./Home/HomePage";
import { LandingPage } from "./Landing/LandingPage";
import { RootPage } from "./Root/RootPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootPage />}>
          <Route path={ROOT} element={<LandingPage />} />
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={CREATE_WORKOUT_PAGE} element={<CreateWorkout />} />
          <Route path={EXERCISES_PAGE} element={<ExercisesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
