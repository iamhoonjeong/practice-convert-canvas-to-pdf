import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';

import Home from '../../pages/home/Home';
import About from '../../pages/about/About';

const ContentStyled = styled(Layout.Content)`
  height: 100%;
  overflow-y: scroll;
  padding: 20px 30px 50px;
`;

const Content = () => {
  return (
    <ContentStyled>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </ContentStyled>
  );
};

export default Content;