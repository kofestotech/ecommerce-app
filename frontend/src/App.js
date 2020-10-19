import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Routes from "./routes";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
