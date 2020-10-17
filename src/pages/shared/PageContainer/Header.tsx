import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const Header: React.FC<{ classNames: any; onMenuIconClick: () => void }> = ({
  classNames,
  onMenuIconClick
}) => {
  return (
    <AppBar position="fixed" className={classNames.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuIconClick}
          edge="start"
          className={classNames.iconButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Bookmarks
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
