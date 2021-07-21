import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import UploadVariants from "./screens/UploadVariants";
import UploadDetails from "./screens/UploadDetails";
import ConnectWallet from "./screens/ConnectWallet";
import Faq from "./screens/Faq";
import Activity from "./screens/Activity";
import Search01 from "./screens/Search01";
import Search02 from "./screens/Search02";
import Profile from "./screens/Profile";
import ProfileEdit from "./screens/ProfileEdit";
import Item from "./screens/Item";
import PageList from "./screens/PageList";
import { init, isLoggedIn } from "./stores/auth";
import { Component } from "react";

init();

class App extends Component {
  constructor(props) {
    super(props);
    let i = 0;
    this.state = { loginState: isLoggedIn.get() };
    setTimeout(() => {
      this.unsub = isLoggedIn.subscribe((loginState) => {
        this.setState({ loginState });
      });
    }, 10);
  }
  componentWillUnmount() {
    this.unsub();
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Page>
                <Home />
              </Page>
            )}
          />
          {this.state.loginState && (
            <Route
              exact
              path="/create-item"
              render={() => (
                <Page>
                  <UploadVariants />
                </Page>
              )}
            />
          )}
          <Route
            exact
            path="/upload-details"
            render={() => (
              <Page>
                <UploadDetails />
              </Page>
            )}
          />
          <Route
            exact
            path="/connect-wallet"
            render={() => (
              <Page>
                <ConnectWallet />
              </Page>
            )}
          />
          <Route
            exact
            path="/faq"
            render={() => (
              <Page>
                <Faq />
              </Page>
            )}
          />
          <Route
            exact
            path="/activity"
            render={() => (
              <Page>
                <Activity />
              </Page>
            )}
          />
          <Route
            exact
            path="/search01"
            render={() => (
              <Page>
                <Search01 />
              </Page>
            )}
          />
          <Route
            exact
            path="/search02"
            render={() => (
              <Page>
                <Search02 />
              </Page>
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => (
              <Page>
                <Profile />
              </Page>
            )}
          />
          {this.state.loginState && (
            <Route
              exact
              path="/profile-edit"
              render={() => (
                <Page>
                  <ProfileEdit />
                </Page>
              )}
            />
          )}
          {this.state.loginState && (
            <Route
              exact
              path="/item"
              render={() => (
                <Page>
                  <Item />
                </Page>
              )}
            />
          )}
          <Route
            exact
            path="/pagelist"
            render={() => (
              <Page>
                <PageList />
              </Page>
            )}
          />
          <Route
            render={() => (
              <Page>
                <section
                  className="container"
                  style={{ minHeight: "70vh", paddingTop: "5rem" }}
                >
                  <h1>404 - Not Found</h1>
                </section>
              </Page>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
