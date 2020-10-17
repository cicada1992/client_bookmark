import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer';
import Header from './Header';
import { useStyles } from './hooks';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

interface DrawerItem {
  id: string;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  navigateTo: string;
}

const DRAWER_ITEMS_FIRST_GROUP: DrawerItem[] = [
  { id: 'id-0', label: '북마크 리스트', icon: BookmarksIcon, navigateTo: '/' },
  { id: 'id-1', label: '북마크 추가하기', icon: PostAddIcon, navigateTo: '/bookmark/new' },
  { id: 'id-2', label: '폴더 추가히기', icon: CreateNewFolderIcon, navigateTo: '/directory/new' }
];

const DRAWER_ITEMS_TWO_GROUP: DrawerItem[] = [
  { id: 'id-0', label: '계정 관리', icon: AccountCircleIcon, navigateTo: '/auth' }
];

interface Props {
  children: React.ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const headerClassNames = {
    appBar: clsx(classes.appBar, {
      [classes.appBarShift]: open
    }),
    iconButton: clsx(classes.menuButton, {
      [classes.hide]: open
    })
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root}>
      <Header classNames={headerClassNames} onMenuIconClick={handleDrawerOpen} />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {DRAWER_ITEMS_FIRST_GROUP.map(({ id, icon: Icon, label, navigateTo }) => (
            <ListItem button key={id} onClick={() => history.push(navigateTo)}>
              <ListItemIcon>{<Icon />}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {DRAWER_ITEMS_TWO_GROUP.map(({ id, icon: Icon, label, navigateTo }) => (
            <ListItem button key={id} onClick={() => history.push(navigateTo)}>
              <ListItemIcon>{<Icon />}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </Container>
  );
};

export default PageContainer;
