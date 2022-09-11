import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { Menu } from '@arco-design/web-react';
import { IconCodeSandbox, IconHome, IconStamp, IconTool, IconUser } from '@arco-design/web-react/icon';
import "@arco-design/web-react/dist/css/arco.css";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;


const SideMenu = (props: RouteConfigComponentProps) => {

  const rlocation = useLocation()
  const rhistory = useHistory()
  const [selectedKeys, setSelectedKeys] = useState(['overview'])

  const handleClickMenuItem = (key, event, keyPath) => {
    const selectkeysArray = keyPath?.reverse()
    setSelectedKeys(selectkeysArray)
    rhistory.push('/clientarea/' + selectkeysArray?.join('/'))
  }

  useEffect(() => {
    const pathname = rlocation?.pathname
    const selectedKeys = pathname?.split('/')
    selectedKeys.shift()
    selectedKeys.shift()
    selectedKeys?.length && setSelectedKeys(selectedKeys)
  }, [])

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Menu
        style={{ width: 200, height: '100%' }}
        hasCollapseButton
        autoOpen
        selectedKeys={selectedKeys}
        onClickMenuItem={handleClickMenuItem}
      >
        <MenuItem key='overview'><IconHome />总览</MenuItem>
        <SubMenu key='server' title={<><IconCodeSandbox />产品管理</>}>
          <MenuItem key='cloudserver'>云服务器</MenuItem>
          <MenuItem key='physicalserver'>物理服务器</MenuItem>
          <MenuItem key='other'>其他</MenuItem>
        </SubMenu>
        <SubMenu key='2' title={<> <IconUser />用户中心 </>}>
          <MenuItem key='2_0'>个人信息</MenuItem>
          <MenuItem key='2_1'>安全中心</MenuItem>
          <MenuItem key='2_2'>消息中心</MenuItem>
          <MenuItem key='2_3'>系统日志</MenuItem>
        </SubMenu>
        <SubMenu key='3' title={<> <IconStamp />财务管理 </>}>
          <MenuItem key='3_0'>账单管理</MenuItem>
          <MenuItem key='3_1'>账户充值</MenuItem>
          <MenuItem key='3_2'>交易记录</MenuItem>
        </SubMenu>
        <SubMenu key='4' title={<> <IconTool />技术支持 </>}>
          <MenuItem key='4_0'>工单列表</MenuItem>
          <MenuItem key='4_1'>提交工单</MenuItem>
          <MenuItem key='4_2'>帮助中心</MenuItem>
          <MenuItem key='4_3'>公告中心</MenuItem>
          <MenuItem key='4_4'>资源下载</MenuItem>
        </SubMenu>
      </Menu>
      <div style={{ flexGrow: 2, height: '100%' }}>{renderRoutes(props.route.routes)}</div>
    </div >
  );
};

export default SideMenu;