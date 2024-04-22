import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./style.css";
import Event from "./views/event";
import Home from "./views/home";
import HalamanCatering from "./views/halaman-catering";
import CREATE from "./views/create";
import Pesan from "./views/pesan";
import SignIncostumer from "./views/sign-incostumer";
import PesanSekarang from "./views/pesan-sekarang";
import Payment from "./views/payment";
import PesananSelesai from "./views/pesanan-selesai";
import Pesanansudahdatang from "./views/pesanansudahdatang";
import AccountCustomer from "./views/account-customer";
import Daftarpesanancatering from "./views/daftarpesanancatering";
import PesananCatering from "./views/pesanan-catering";
import SignUpCustomer from "./views/sign-up-customer";
import Group149Variant2 from "./views/group149-variant2";
import NotFound from "./views/not-found";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/home" />
        <Route component={Event} exact path="/event" />
        <Route component={HalamanCatering} exact path="/halaman-catering" />
        <Route component={CREATE} exact path="/create" />
        <Route component={Pesan} exact path="/pesan" />
        <Route component={SignIncostumer} exact path="/sign-incostumer" />
        <Route component={PesanSekarang} exact path="/pesan-sekarang" />
        <Route component={Payment} exact path="/payment" />
        <Route component={PesananSelesai} exact path="/pesanan-selesai" />
        <Route
          component={Pesanansudahdatang}
          exact
          path="/pesanansudahdatang"
        />
        <Route component={AccountCustomer} exact path="/account-customer" />
        <Route component={SignUpCustomer} exact path="/sign-up-customer" />
        <Route component={PesananCatering} exact path="/pesanan-catering" />
        <Route component={Group149Variant2} exact path="/group149-variant2" />
        <Route
          component={Daftarpesanancatering}
          exact
          path="/daftarpesanancatering"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
