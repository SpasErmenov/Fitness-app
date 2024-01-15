import { BrowserRouter, Routes, Route } from "react-router-dom";

import Root from "./Root/Root";
import Home from "./Home/Home";
import Landing from "./Landing/Landing";
import CreateWorkout from "./CreateWorkout/CreateWorkout";
import ExercisesPage from "./ExercisesPage/ExercisesPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/home/create-workout" element={<CreateWorkout />} />
          <Route path="/exercises" element={<ExercisesPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
