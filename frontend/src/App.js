import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { omit } from 'lodash';

import ImportDataCard from './components/ImportDataCard';
import SearchCard from './components/SearchCard';
import UpdateCard from './components/UpdateCard';
import './App.css';
import LoadingComponent from "./components/LoadingComponent";

function App() {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchProductList = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/products`, {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json() || [];
        const productList = result.map(product => {
          return omit({
            id: product._id,
            ...product,
          },['__v', '_id', 'updatedAt'])
        });
        // console.log("productList",productList);
        setData(productList)
      } catch (error) {
        console.log(" fetchProductList error:", error);
      } finally { 
        setLoading(false);
      }
    };
    fetchProductList();
  }, []);

  if (loading) {
    return (
      <LoadingComponent />
    )
  };

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/product/:id">
            <UpdateCard data={data} /> 
          </Route>
          <Route path="/product">
            <SearchCard data={data} />
          </Route>
          <Route path="/data-import">
            <ImportDataCard />
          </Route>
          <Route path="/">
            <SearchCard data={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
