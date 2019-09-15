import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import image1 from "./imagenes/1.png"
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import { Container, Button, lightColors, darkColors } from 'react-floating-action-button'

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function logOut() {
    localStorage.removeItem("isLoggedin");
    window.location.replace("/");

}

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    function handleCreate() {
        alert("create");
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Laboratorio 3 IETI
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <div>
                    <img src={image1} height="180" width="180" />
                    <ListItemText primary={localStorage.getItem('mailLogged')} />
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={logOut}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log out" />
                    </ListItem>
                </List>
            </Drawer>


            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Card >
                    <Typography color="textSecondary" gutterBottom>
                        description= descripcion fija 1
                    </Typography>
                    <p></p>
                    <Divider />
                    <Typography color="textSecondary" gutterBottom>
                        nombre= 2
                        <p></p>
                        correo electrónico = a_b@correodepeurba.co
                    </Typography>
                    <p></p>
                    <Divider />
                    <Typography color="textSecondary" gutterBottom>
                        Status= "listo"
                    </Typography>
                    <p></p>
                    <Divider />
                    <Typography color="textSecondary" gutterBottom>
                        DueDate= "156464645646"
                    </Typography>
                </Card>
                <p></p>
                <p></p>
                <Card >
                    <Typography color="textSecondary" gutterBottom>
                        description= algún texto descriptivo
                    </Typography>
                    <p></p>
                    <Divider />
                    <Typography color="textSecondary" gutterBottom>
                        nombre= Santiago Carrillo
                        <p></p>
                        correo electrónico = sancarbar @ gmail
                    </Typography>
                    <p></p>
                    <Divider />
                    <Typography color="textSecondary" gutterBottom>
                        Status= "listo"
                    </Typography>
                    <p></p>
                    <Divider />
                    <Typography color="textSecondary" gutterBottom>
                        DueDate= "156464645646"
                    </Typography>
                </Card>
                <Container>
                    <Button
                        
                        tooltip="add Card"
                        styles={{ backgroundColor: darkColors.lighterRed, color: lightColors.lighterRed}}
                        onClick={handleCreate}
                    />
                </Container>
            </main>
        </div>
    );
}