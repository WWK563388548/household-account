import React, { Component, Fragment } from 'react';
import PriceList from './functional/PriceList';
import ViewTab from './functional/ViewTab';
import DatePicker from './functional/DatePicker';
import CreateBtn from './functional/CreateBtn';
import DogLogo from '../static/the-doge.png';
import TotalPrice from './functional/TotalPrice';

const categories = {
    "1" : {
        "id": "1",
        "name": "旅行",
        "type": "outcome",
        "iconName": "ios-plane"
    },
    "2" : {
        "id": "8",
        "name": "奖金",
        "type": "income",
        "iconName": "ios-card"
    },
};
// Mock data
const items = [
    {
      "id": 1,
      "title": "去日本旅游",
      "price": 20000,
      "date": "2019-04-01",
      "cid": 1
    },
    {
      "id": 2,
      "title": "发奖金",
      "price": 80000,
      "date": "2019-03-25",
      "cid": 2
    },
    {
      "id": 3,
      "title": "发奖金",
      "price": 80000,
      "date": "2019-03-25",
      "cid": 2
    },
    {
        "id": 4,
        "title": "去日本旅游",
        "price": 20000,
        "date": "2019-04-01",
        "cid": 1
      },
      {
        "id": 5,
        "title": "去日本旅游",
        "price": 20000,
        "date": "2019-04-01",
        "cid": 1
      },
      {
        "id": 6,
        "title": "去日本旅游",
        "price": 20000,
        "date": "2019-04-01",
        "cid": 1
      },
  ];

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            items,
            // currentDate: this.parseToYearAndMonth(),
            tabView: "list"
        };
    }

    parseToYearAndMonth(str) {
        const date  = str ? new Date(str) : new Date();

        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
        };
    }
    
    changeTabView = () => {

    }

    changeDate = (year, month) => {
        console.log("change date: ", year, month)
    }

    modifyItem = () => {

    }

    createItem = () => {
        console.log("create new item")
    }

    deleteItem = () => {

    }

    render() {
        const {items, tabView} = this.state;
        const itemWithCategory = items.map((item) => {
            item.category = categories[item.cid];
            return item;
        });
        let totalIncome = 0;
        let totalOutcome = 0;

        itemWithCategory.forEach(item => {
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
                            <DatePicker onChange={(year, month) => this.changeDate(year, month)} />
                        </div>
                        <div className="col">
                            <TotalPrice income={totalIncome} outcome={totalOutcome} />
                        </div>
                    </div>
                </header>
                <div className="content-area py-3 px-3">
                    <ViewTab 
                        activeTab={tabView}
                        onTabChange={this.changeTabView}
                    />
                    <CreateBtn onClick={this.createItem} />
                    <PriceList 
                        items={itemWithCategory} 
                        onModifyItem={this.modifyItem}
                        onDeleteItem={this.deleteItem}
                    />
                </div>
                <div className="footer"></div>
            </div>
        );
    }
}

export default Home;