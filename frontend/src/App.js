import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { omit } from 'lodash';

import AdminUpdateCard from './components/Admin/UpdateCard';
import ProductImportDataCard from './components/Products/ImportDataCard';
import ProductSearchCard from './components/Products/SearchCard';
import ProductUpdateCard from './components/Products/UpdateCard';
import ProfileSearchCard from './components/Profiles/SearchCard';
import ProfileUpdateCard from './components/Profiles/UpdateCard';
import './App.css';
import LoadingComponent from "./components/common/LoadingComponent";

function App() {
  const [adminData, setAdminData] = React.useState([]);
  const [productsData, setProductsData] = React.useState([]);
  const [profilesData, setProfilesData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchAdminData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/admin`, {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json() || [];
        const adminDataList = result.map(admin => {
          return omit({
            id: admin._id,
            ...admin,
          },['__v', '_id', 'updatedAt'])
        });
        setAdminData(adminDataList)
      } catch (error) {
        console.log(" fetchAdminData error:", error);
      } finally { 
        setLoading(false);
      }
    };
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
        setProductsData(productList)
      } catch (error) {
        console.log(" fetchProductList error:", error);
      } finally { 
        setLoading(false);
      }
    };
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/profiles`, {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json() || [];
        const profileDataList = result.map(profile => {
          return omit({
            id: profile._id,
            ...profile,
          },['__v', '_id', 'updatedAt'])
        });
        setProfilesData(profileDataList)
      } catch (error) {
        console.log(" fetchProfileData error:", error);
      } finally { 
        setLoading(false);
      }
    };
    fetchAdminData();
    fetchProductList();
    fetchProfileData();
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
          <Route path="/admin">
            <AdminUpdateCard data={adminData} /> 
          </Route>
          <Route path="/product/:id">
            <ProductUpdateCard data={productsData} /> 
          </Route>
          <Route path="/product">
            <ProductSearchCard data={productsData} />
          </Route>
          <Route path="/productsData-import">
            <ProductImportDataCard />
          </Route>
          <Route path="/profile/:id">
            <ProfileUpdateCard data={profilesData} /> 
          </Route>
          <Route path="/profile">
            <ProfileSearchCard data={profilesData} />
          </Route>
          <Route path="/">
            <ProductSearchCard data={productsData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
