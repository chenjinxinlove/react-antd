/**
 * Created by chen on 2017/5/15.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


class SiderCustom extends Component {
  state = {
    collapse: false,
    mode: 'inline',
    openKey: '',
    selectedKey: ''
  };
  componentDidMount () {
    const PATH = this.props.path;
    this.setState({
      openKey: PATH.substr(0, PATH.lastIndexOf('/')),
      selectedKey: PATH
    })
  }
  componentWillReceiveProps(nextProps) {
    this.onCollapse(nextProps.collapse);
  }
  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical': 'inline'
    })
  };
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    })
  };
  openMenu = v => {
    this.setState({
      openKey: v[v.length - 1]
    })
  }

  render() {
    return (
      <Sider
        trigger={null}
        breakpoint='lg'
        collapsible
        collapsed={this.props.collapsed}
        onCollapse={this.onCollapse}
        style={{overflowY: 'auto'}}
      >
        <div className="logo"></div>
        <Menu
          onClick={this.menuClick}
          theme="dark"
          mode={this.state.mode}
          selectedKeys={[this.state.selectedKey]}
          openKeys={[this.state.openKey]}
          onOpenChange={this.openMenu}
        >
          <Menu.Item key="/app/dashboard/index">
            <Link to='/app/dashboard/index'><Icon type="mobile"/><span className="nav-text">首页</span></Link>
          </Menu.Item>
          <SubMenu
            key="/app/ui"
            title={<span><Icon type="scan"/><span className="nav-text">数据管理</span></span>}
          >
            <Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}>用户列表</Link></Menu.Item>
            <Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}>商家列表</Link></Menu.Item>
            <Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}>食品列表</Link></Menu.Item>
            <Menu.Item key="/app/ui/modals"><Link to={'/app/ui/modals'}>订单列表</Link></Menu.Item>
            <Menu.Item key="/app/ui/notifications"><Link to={'/app/ui/notifications'}>管理员列表</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="/app/animation"
            title={<span><Icon type="rocket" /><span className="nav-text">添加数据</span></span>}
          >

            <Menu.Item key="/app/animation/basicAnimations"><Link to={'/app/animation/basicAnimations'}>添加商铺</Link></Menu.Item>
            <Menu.Item key="/app/animation/exampleAnimations"><Link to={'/app/animation/exampleAnimations'}>添加商品</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="/app/table"
            title={<span><Icon type="copy" /><span className="nav-text">图表</span></span>}
          >

            <Menu.Item key="/app/table/basicTable"><Link to={'/app/table/basicTable'}>用户分布</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="/app/form"
            title={<span><Icon type="edit" /><span className="nav-text">编辑</span></span>}
          >

            <Menu.Item key="/app/basicForm"><Link to={'/app/form/basicForm'}>文本编辑</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="/app/chart"
            title={<span><Icon type="area-chart" /><span className="nav-text">设置</span></span>}
          >
            <Menu.Item key="/app/chart/echarts"><Link to={'/app/chart/echarts'}>管理员设置</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={<span><Icon type="switcher" /><span className="nav-text">其他</span></span>}
          >
            <Menu.Item key="/sm"><Link to={'/login'}>说明</Link></Menu.Item>
            <Menu.Item key="/login"><Link to={'/login'}>登录</Link></Menu.Item>
            <Menu.Item key="/404"><Link to={'/404'}>404</Link></Menu.Item>
          </SubMenu>
        </Menu>
        <style>
          {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
        </style>
      </Sider>
    )
  }
}

export default SiderCustom;
