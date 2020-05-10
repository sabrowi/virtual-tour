import React, { useState, useEffect, Fragment } from "react";

import { App as SendbirdApp } from "sendbird-uikit";
import Login from "./Login";
import "sendbird-uikit/dist/index.css";

function App() {
  const [config, setconfig] = useState(null);

  useEffect(() => {
    let storage = localStorage.getItem("config");
    console.log(storage);
    if (storage !== null) {
      setconfig(JSON.parse(storage));
    }
  }, []);

  return (
    <Fragment>
      {config === null ? (
        <Login onLogin={setconfig} />
      ) : (
        <SendbirdApp
          appId="BB5A070F-098F-45DD-B095-B66B2C706059"
          userId={config.username}
          nickname={config.nickname}
        />
      )}
    </Fragment>
  );
}

export default App;
