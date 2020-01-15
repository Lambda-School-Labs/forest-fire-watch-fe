import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Theme from '../styles/custom-theme'
import {
  makeStyles,
  useTheme,
  MuiThemeProvider
} from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    paddingTop: '5%',
    marginLeft: '40% !important',
  },
}));
const checklistItems = ['Have at least 1/2 tank of gas', '1 gallon water per person per day', 'Non Perishable food', 'Non electric can opener', 'Insurance Card', 'Identification', 'Passports', 'Deed to property', 'Prescription Medication', 'Flashlight', 'Battery powered Radio with extra batteries', 'Cash', 'Extra set of keys (car, house)', 'Glasses, including extra sets', 'Family members, animals', 'Computers', 'Photos']
export default function CheckboxList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const handleToggle = checklistItems => () => {
    const currentIndex = checked.indexOf(checklistItems);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(checklistItems);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <List className={classes.root}>
      <MuiThemeProvider theme={Theme}>
    {checklistItems.map(checklistItem => {
      const labelId = `checkbox-list-label-${checklistItem}`;
      return (
        <ListItem
          key={checklistItem}
          role={undefined}
          dense
          button
          onClick={handleToggle(checklistItem)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(checklistItem) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={` ${checklistItem}`} />
          </ListItem>
        );
      })}
      </MuiThemeProvider>
    </List>
  )
}