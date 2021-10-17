import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import UserContext from "./providers/UserContext";
import Content from "./components/content/Content";
import Thread from "./components/thread/Thread";
import NotFound from "./components/not-found/NotFound";


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Layout>
            <Switch>
              <Redirect from="/" exact to="/home" />
              <Route path="/home" component={Content} />
              <Route path="/r/:id" component={Thread} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
