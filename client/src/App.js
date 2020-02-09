
import React, { Component } from 'react';
import './App.css';
import { message, Layout } from 'antd'
import Category from './components/Category'
import Header from './components/Header'
import TodosItem from './components/TodosItem'

const { Footer, Sider, Content } = Layout;


class App extends Component {

    handleClick = () => {
        message.success('This is a success message');
    }
  render() {

    return (
        <div>
            <Layout style={{height: 822}}>
                <Sider><Category /></Sider>
                <Layout>
                    <Header></Header>
                    <Content style={{backgroundColor: '#fff'}}>
                        <TodosItem />
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#ccccc'}}>Use Chrome for better experience</Footer>
                </Layout>
            </Layout>
        </div>
    );
  }
}

export default App;
