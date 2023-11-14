import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListSubheader,
  Typography,
} from '@mui/material';
import { contactData } from '../../Data/ContactData';

const ContactCardGrid = () => {
  return (
    <Grid container spacing={2} sx={{ width: 700, textAlign: 'left' }}>
      {contactData.map((data) => {
        return (
          <Grid item key={data.name}>
            <Card sx={{ width: 300 }}>
              <CardHeader
                title={data.name}
                subheader={data.role}
                avatar={
                  <Avatar>
                    {data.name?.substring(0, 1).toUpperCase() || 'A'}
                  </Avatar>
                }
              />
              <CardContent>
                <Typography>Start Date: {data.startDate}</Typography>
                <Typography>Work Preference: {data.preference}</Typography>
                <List
                  sx={{
                    listStyle: 'list-item',
                    listStyleType: 'circle',
                    paddingLeft: 2,
                  }}
                  subheader={
                    <ListSubheader
                      sx={{
                        right: 16,
                        position: 'inherit',
                        fontSize: '1.25rem',
                        color: 'black',
                        paddingLeft: 0,
                      }}
                    >
                      Skills:
                    </ListSubheader>
                  }
                >
                  {data.skills?.map((skill) => {
                    return (
                      <li style={{ paddingBottom: '2px' }} key={skill}>
                        {skill}
                      </li>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ContactCardGrid;

/**
 ** Grid component can act as two ways as you pass the props. 
    ** 1. A container kind Grid
      *? <Grid container> </Grid>
    ** 2. An item inside the Grid
      *? <Grid item> </Grid>
  
  ** Card component has two main components and <Card/> Component wraps around them
    ** <CardHeader />
    ** <CardContent />
 */
