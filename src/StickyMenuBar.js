import React, {Component} from 'react';
import styled from 'styled-components';
import {Menu, Container, Input} from 'semantic-ui-react';

const FullWidthBg = styled.div`
    background-color: ${props => props.theme.brandBlue};
    padding: 20px 0px;
    box-shadow: 5px 0px 10px rgba(0,0,0,0.45);
`

const TransparentMenu = styled(Menu)`
  &&&{
    background: transparent;
    border: 0px;
    box-shadow: none;
  }
`

const MenuItem = styled(Menu.Item)`
  &&&&{
    color: ${props => props.theme.brandWhite}
  }    
`

const MenuItemLink = MenuItem.extend`
  &&&&&&{
    text-transform: uppercase;
    font-size: ${props => props.theme.h3Size};
    
    &:before{
      background: transparent;
    }
    
    &:hover{
      color: ${props => props.theme.brandBlack};
      background-color: transparent;
    }
  }
  
`

const SearchInput = styled(Input)`
  &&&&&&{
    background-color: transparent;  
  }
  
  &&&&& > input {
   background: transparent;
   color: ${props =>props.theme.brandWhite};
   border: 2px solid ${props =>props.theme.brandWhite};
   
   ::placeholder{
    color: ${props =>props.theme.brandWhite};
   }
  }
  
  
  > i {
    color: ${props =>props.theme.brandWhite};
  }
`

const TransparentMenuMenu = styled(Menu.Menu)`
  &&&&&{
    background: transparent;
    border: 0px;
    box-shadow: none;
  }
`


class StickyMenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeItem: '',
            menuItems: ["posters", "authors", "topics"]
        }
    }

    handleNewItem(name){
        this.setState({
            activeItem: name,
        })
    }

    render() {
        const {activeItem, menuItems} = this.state;
        return (
            <FullWidthBg>
                <Container>
                    <TransparentMenu stackable>
                        <MenuItem header>Better Quotes</MenuItem>
                        {menuItems.map(menuItem =>
                        <MenuItemLink
                            name={menuItem}
                            activate={activeItem === menuItem}
                            onClick={() => this.handleNewItem(menuItem)}
                        ></MenuItemLink>)}
                        <TransparentMenuMenu position="right">
                            <MenuItem>
                                <SearchInput icon="search" placeholder="Search..."/>
                            </MenuItem>
                        </TransparentMenuMenu>
                    </TransparentMenu>
                </Container>
            </FullWidthBg>
        );
    }
}

export default StickyMenuBar;
