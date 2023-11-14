import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ContactForm from './Form/ContactForm';
import ContactCardGrid from '../Grid/ContactCardGrid';
import ContactTable from '../Table/ContactTable';
import ContactDataGrid from '../DataGrid/ContactDataGrid';
import { Theme, ThemeProvider, useTheme } from '@mui/material/styles';
import { BeautifulTheme } from '../../Theme/BeautifulTheme';

const drawerWidth = 240;

const themedStyle = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      /**
       ** z-index(CSS property) / ZIndex(MUI property since MUI supports JS syntax) handle the stacking of the components of the application.

        .element-1 {
          z-index: 2;
        }

        .element-2 {
          z-index: 1;
        }

      *? In the example above, "element-1" will appear in front of "element-2" because it has a higher z-index value.
      
      *! Theme
       ** theme is Theme Object. it has zIndex as default value and drawer as a default value of zIndex
       */
    },
  };
};

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    '& .MuiBackdrop-root': {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(120,120,120,0.2)',
  },
  content: {
    marginLeft: drawerWidth,
    padding: 3,
    maxWidth: 770,
  },
};

const NavDrawer = () => {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed" sx={themedStyle(theme).appBar}>
          {/*
          /**
          ** If we apply inLine styles, it applies the index via inline styling in the DOM,
          ** where as the SX is actually injects styling into the classes that are being rendered
          ** the AppBar. So using SX not inline styling when it comes to DOM.
          * ? SX uses CSS in JS syntax
          * * Using `& .` indicates that the Styles is applying to a child element
  */}
          {/* 
          /**
           ** TollBar is vertical spacer. It is supposed to have children inside of it, such as maybe you have buttons inside 
           ** of it for exporting */}
          {/* 
          /** 
           ** DataGrid has built in TOOLBAR that does that */}
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advance MUI Styling
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          disableEnforceFocus
          variant="temporary"
          open={true}
          sx={simpleStyles.drawer}
          PaperProps={{
            sx: simpleStyles.drawerPaper,
            elevation: 9,
          }}
        >
          {/*
          /**
           ** ELEVATION is just an access to shadow. 
        */}
          {/* 
          /**
           **Temporary is used for mobile response so the draw can be closed or disappeared or it can be opened */}
          <Toolbar />
          <List>
            {[
              { text: 'Input Form', route: '/form' },
              { text: 'Contact Card Grid', route: '/grid' },
              { text: 'Contact Table', route: '/table' },
              { text: 'Contact Data Grid', route: '/datagrid' },
            ].map((nav, index) => (
              <ListItem key={index}>
                <Link to={nav.route}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main style={simpleStyles.content}>
          <Toolbar />
          <ThemeProvider theme={BeautifulTheme}>
            <Routes>
              <Route path={'/'} element={<ContactForm />} />
              <Route path={'/form'} element={<ContactForm />} />
              <Route path={'/grid'} element={<ContactCardGrid />} />
              <Route path={'/table'} element={<ContactTable />} />
              <Route path={'/datagrid'} element={<ContactDataGrid />} />
            </Routes>
          </ThemeProvider>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default NavDrawer;

/**
 *? "& .MuiBackdrop-root" -- when using like this ( space ) means looking for a child element. ( dot .) means looking for a class 

 * --------- Notes --------
 ** There are 3 main component styling ways in MUI
    ** 1. SX prop 
        *! -- inject the css into the root class of the component. 
            *? If we apply <TextField sx={}/> then this styles are applying for the MuiTextField-root class. 

        *! -- Sx can pull values from the theme(if not theme provided it will pull values from default theme) and set values in CSS. 
            *? sx={{marginBottom: {xs:2, md: 0}}} -----> here xs = 2 value is pulled from the theme(/default theme if not theme provided) which is corresponding to value 16px

        *! -- Normally we use SX field if the components are only used at once in the app. if the same component is using in different parts of the application
          *! it is better to use other styling ways. It also possible to share styling with multiple components using same SX prop. 


    ** 2. Styled API
        *! -- build on to the emotions css library.

        *! -- used when one component is used in different part of the application with different styles. 
          
        *! -- if we want to use values from the theme we need to inject them properly inside the styled API.
            *? {padding: props.theme.spacing(2)}

    ** 3. Theme
        *! -- Use <ThemeProvider > and wrap your component with it to use the Theme.
            *? <ThemeProvider theme={customTheme} > <Your component /> </ThemeProvider>
 */

/**
 * -------> Notes <-------
 *
 */
