import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List>
        <ListItem button onClick={() => console.log('ok')}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log('ok')}>
          Info
        </ListItem>
        <ListItem button onClick={() => console.log('ok')}>
          Highlits
        </ListItem>
        <ListItem button onClick={() => console.log('ok')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log('ok')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
