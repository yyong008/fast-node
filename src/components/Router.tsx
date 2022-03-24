import { Route, Routes } from "react-router-dom";

import ContentList from "./ContentList";
import Process from "./Process";
const AppRouter = (props) => {
	return (
    <Routes>
      <Route path="/" element={<ContentList data={props.data} />}></Route>
      <Route path="/process" element={<Process />}></Route>
    </Routes>
  );
}

export default AppRouter;
