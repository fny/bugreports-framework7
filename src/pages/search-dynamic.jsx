import React from 'react';
import { Page, Navbar, Block, BlockTitle, Button, Subnavbar, Searchbar, List, ListItem } from 'framework7-react';



export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }
  render() {

    if (this.state.loaded) {
      return <Page>
      <Navbar title="Dynamic Searchbar"  backLink="Back">
        <Subnavbar inner={false}>
          <Searchbar
            searchContainer=".search-list"
            searchIn=".item-title"
          ></Searchbar>
        </Subnavbar>
      </Navbar>
      <List className="searchbar-not-found">
        <ListItem title="Nothing found" />
      </List>
      <List className="search-list searchbar-found">
        <ListItem title="Acura" />
        <ListItem title="Audi" />
        <ListItem title="BMW" />
        <ListItem title="Cadillac " />
        <ListItem title="Chevrolet " />
        <ListItem title="Chrysler " />
        <ListItem title="Dodge " />
        <ListItem title="Ferrari " />
        <ListItem title="Ford " />
        <ListItem title="GMC " />
        <ListItem title="Honda" />
        <ListItem title="Hummer" />
        <ListItem title="Hyundai" />
      </List>
      </Page>
    }

    return <Page>
      <Button onClick={() => this.setState({loaded: true}) }>Load</Button>
    </Page>

  }
}