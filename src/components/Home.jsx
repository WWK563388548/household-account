import React, { Component, Fragment } from 'react';
import PriceList from './functional/PriceList';
import ViewTab from './functional/ViewTab';
import DatePicker from './functional/DatePicker';
import CreateBtn from './functional/CreateBtn';
import DogLogo from '../static/the-doge.png';
import TotalPrice from './functional/TotalPrice';

export const categories = {
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
export const items = [
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
            currentDate: this.parseToYearAndMonth(),
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
    
    changeTabView = (view) => {
        this.setState({
            tabView: view
        });
    }

    changeDate = (year, month) => {
        console.log("change date: ", year, month);
        this.setState({
            currentDate: {year, month},
        });
    }

    modifyItem = () => {

    }

    createItem = () => {
        console.log("create new item")
    }

    deleteItem = (deletedItem) => {
        const filteredItems = this.state.items.filter(item => item.id !== deletedItem.id);
        this.setState({
            items: filteredItems,
        });
    }

    padLeft = (num) => {
        return num < 10 ? '0' + num : num;
    }

    render() {
        const {items, tabView, currentDate} = this.state;
        const itemWithCategory = items.map((item) => {
            item.category = categories[item.cid];
            return item;
        }).filter(item => {
            return item.date.includes(`${currentDate.year}-${this.padLeft(currentDate.month)}`)
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
                            <DatePicker 
                                year={currentDate.year} 
                                month={currentDate.month} 
                                onChange={(year, month) => this.changeDate(year, month)} 
                            />
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
                    { tabView === "list" &&
                        <PriceList 
                            items={itemWithCategory} 
                            onModifyItem={this.modifyItem}
                            onDeleteItem={this.deleteItem}
                        />
                    }
                    { tabView === "chart" &&
                        <h1>This is Chart view</h1>
                    }
                </div>
                <div className="footer"></div>
            </div>
        );
    }
}

export default Home;