import React, { Component } from 'react';
import PriceList from './functional/PriceList';
import ViewTab from './functional/ViewTab';
import DatePicker from './functional/DatePicker';
import CreateBtn from './functional/CreateBtn';
import DogLogo from '../static/the-doge.png';

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
        return (
            <div>
                <header className="App-header">
                    <div className="row mb-5 justify-content-center">
                        <img src={DogLogo} className="App-logo" alt="logo" />
                    </div>
                </header>
                <DatePicker onChange={(year, month) => {console.log(year, month)}} />
                <CreateBtn />
                <ViewTab 
                    activeTab="list"
                    onTabChange={(view) => {
                        console.log("check view", view);
                    }}
                />
                <PriceList 
                    items={items} 
                    onModifyItem={(item) => alert(item.title)}
                    onDeleteItem={(item) => alert(item.id)}
                />
            </div>
        );
    }
}

export default Home;