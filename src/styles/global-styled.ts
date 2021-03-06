import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  * {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
  }

  header {
    font-size: 12px;
  }

  main {
    font-size: 12px;
  }
  
  // antd css custom
  .site-layout .site-layout-background {
    background-color: #fff;
  }

  .ant-layout-sider,
  .ant-menu.ant-menu-dark,
  .ant-layout-sider-trigger,
  .ant-menu-dark .ant-menu-inline.ant-menu-sub,
  .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, 
  .ant-menu.ant-menu-dark .ant-menu-sub {
    background-color: #1e232e;
  }

  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #1e232e;
  }
  
  .ant-menu-dark .ant-menu-submenu-open {
    color: #fff;
  }

  .ant-menu-dark .ant-menu-item, .ant-menu-dark .ant-menu-item-group-title, .ant-menu-dark .ant-menu-item > a, .ant-menu-dark .ant-menu-item > span > a {
    color: #fff;
  }

  .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
    color: #fff;
  }
  
  // side navigation
  .ant-menu {
    font-size: 12px;
  }

  // loading icon
  .loading-icon {
    font-size: 26px;
    color: #002140;
    position: relative;
    left: 120px;

    &.adjust {
      left: 40px;
    }
  }

  .ant-table {
    font-size: 12px;
    overflow: auto;
  }

  .ant-table-thead > tr > th {
    font-weight: bold;
  }

  .ant-dropdown-trigger > .anticon.anticon-down, .ant-dropdown-link > .anticon.anticon-down, .ant-dropdown-button > .anticon.anticon-down {
    position: relative;
    top: 4px;
  }

  .ant-input {
    font-size: 12px;
  }
`;

export default GlobalStyle;
