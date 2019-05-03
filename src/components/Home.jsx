import React, { Component, Fragment } from 'react';
import PriceList from './functional/PriceList';
import ViewTab from './functional/ViewTab';
import DatePicker from './functional/DatePicker';
import CreateBtn from './functional/CreateBtn';
import DogLogo from '../static/the-doge.png';
import TotalPrice from './functional/TotalPrice';

// Mock data
const items = [
    {
      "id": 1,
      "title": "去日本旅游",
      "price": 20000,
      "date": "2019-04-01",
      "category": {
        "id": "1",
        "name": "旅行",
        "type": "outcome",
        "iconName": "ios-plane"
      }
    },
    {
      "id": 2,
      "title": "发奖金",
      "price": 80000,
      "date": "2019-03-25",
      "category": {
        "id": "8",
        "name": "奖金",
        "type": "income",
        "iconName": "ios-card"
      }
    },
    {
      "id": 3,
      "title": "发奖金",
      "price": 80000,
      "date": "2019-03-25",
      "category": {
        "id": "8",
        "name": "奖金",
        "type": "income",
        "iconName": "ios-card"
      }
    },
  ];

class Home extends Component {

    render() {
        let totalIncome = 0;
        let totalOutcome = 0;

        items.forEach(item => {
            if(item.category.type === 'outcome'){
                totalOutcome += item.price;
            } else {
                totalIncome += item.price;
            }
        });
        return (
            <div className="the-background">
                <header className="App-header">
                    <div className="logo-row row mb-3 justify-content-center">
                        <img src={DogLogo} className="App-logo" alt="logo" />
                    </div>
                    <div className="row">
                        <div className="col"> 
                            <DatePicker onChange={(year, month) => {console.log(year, month)}} />
                        </div>
                        <div className="col">
                            <TotalPrice income={totalIncome} outcome={totalOutcome} />
                        </div>
                    </div>
                </header>
                <div className="content-area py-3 px-3">
                    <ViewTab 
                        activeTab="list"
                        onTabChange={(view) => {
                            console.log("check view", view);
                        }}
                    />
                    <CreateBtn />
                    <PriceList 
                        items={items} 
                        onModifyItem={(item) => alert(item.title)}
                        onDeleteItem={(item) => alert(item.id)}
                    />
                </div>
                <div className="footer"></div>
            </div>
        );
    }
}

export default Home;