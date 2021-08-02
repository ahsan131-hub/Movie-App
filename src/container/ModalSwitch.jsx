
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
}  from "react-router-dom";
import WatchTrailor from "./watchtrailor";
import ViewMore from "./viewmore";
import App from "../App";
export  default  function ModalSwitch() {
    let location = useLocation();
  
    // This piece of state is set when one of the
    // gallery links is clicked. The `background` state
    // is the location that we were at when one of
    // the gallery links was clicked. If it's there,
    // use it as the location for the <Switch> so
    // we show the gallery in the background, behind
    // the modal.
    let background = location.state && location.state.background;
  
    return (
      <div>
        <Switch location={background || location}>
          <Route exact path="/" children={<App />} />
          <Route  path="/watch-trailor/:movie_id" children={<WatchTrailor />} />
          <Route path="/view-more/:movie_id" children={<ViewMore  />} />
        </Switch>
  
        
        {/* Show the modal when a background page is set */}
        {/* {background && <Route path="/watch-trailor/:movie_id" children={<WatchTrailor />} />} */}
      </div>
    );
  }