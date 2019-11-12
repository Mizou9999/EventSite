import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawOpen: false,
      headerShow: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlScroll);
  }
  handlScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true,
      });
    } else {
      this.setState({
        headerShow: false,
      });
    }
  };
  toggleDrawer = value => {
    this.setState({
      drawOpen: value,
    });
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0px',
          transition: 'background .2s',
        }}
      >
        <ToolBar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Music event</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </ToolBar>
      </AppBar>
    );
  }
}
export default Header;
