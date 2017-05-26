/**
 * Created by chen on 2017/5/15.
 */
import React, {Component} from 'react';

import { Menu, Icon, Layout, Badge} from 'antd';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import screenfull from 'screenfull';



class HeaderCustom extends Component {
  state = {
    user:''
  };
  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request();
    }
  };
  render() {
    return (
      <Header style={{background: '#fff', padding: 0, height: 65}} className="custom-theme">
        <Icon
          className="trigger custom-trigger"
          type={this.state.collapsed ? 'menu-unfold': 'menu-fold'}
          onClick={this.props.toggle}
        />
        <Menu
          mode="horizontal"
          style={{ lineHeight: '64px', float: 'right' }}
        >
          <Menu.Item key="full" onClick={this.screenFull} >
            <Icon type="arrows-alt" onClick={this.screenFull} />
          </Menu.Item>
          <Menu.Item key="1">
            <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
              <Icon type="notification" />
            </Badge>
          </Menu.Item>
          <SubMenu title={<span className="avatar"><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494862997904&di=80db950ebcb04271eae83b81f94e4587&imgtype=0&src=http%3A%2F%2Fimg2015.zdface.com%2F20170222%2F245f864c4689853bad66a78e6c6e5676.jpg' style={{ width:'40px',height: '40px' }} alt="头像" /><i className="on bottom b-white" /></span>}>
            <MenuItemGroup title="用户中心">
              <Menu.Item key="setting:1">你好 - {this.state.user.login}</Menu.Item>
              <Menu.Item key="setting:2">个人信息</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="设置中心">
              <Menu.Item key="setting:3">个人设置</Menu.Item>
              <Menu.Item key="setting:4">系统设置</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
        <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                `}</style>
      </Header>
    )
  }
}

export default HeaderCustom;
