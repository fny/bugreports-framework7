import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';

export default () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavTitle sliding>F7 Bug Report</NavTitle>
      <NavTitleLarge>F7 Bug Report</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link="/search/" title="Search"/>
      <ListItem link="/search-dynamic/" title="Search Dynamic"/>

    </List>

  </Page>
);