/**
 * Created by chenjinxin on 2017/3/25.
 */
import 'styles/index.less';
import React from 'react';
import { Layout } from 'antd';


const { Content, Footer } = Layout;

import SiderCustom from 'components/layout/siderCustom';
import HeaderCustom from 'components/layout/headerCustom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapse: false
    }
  }
  toggle = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };
  render(){
    return(
      <Layout className="ant-layout-has-sider">
        <SiderCustom path={ this.props.location.pathname } collapsed={ this.state.collapse }></SiderCustom>
        <Layout>
          <HeaderCustom toggle={this.toggle}></HeaderCustom>
          <Content style={{ margin: '0 16px', overflow: 'initial' }}>
            { this.props.children }
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            weather
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App;
