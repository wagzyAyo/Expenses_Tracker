import FoodIcon from '@mui/icons-material/Fastfood';
import TravelIcon from '@mui/icons-material/AirplanemodeActive';
import ShoppingIcon from '@mui/icons-material/ShoppingCart';
import DefaultIcon from '@mui/icons-material/Category';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const CategoryIcon = (props) => {
  let IconComponent;
  let iconClassName;


  switch (props.category.toLowerCase()) {
    case 'food':
      IconComponent = FoodIcon;
      iconClassName = styleSheet.foodIcon;
      break;
    case 'transportation':
      IconComponent = TravelIcon;
      iconClassName = styleSheet.travelIcon
      break;
    case 'shopping':
      IconComponent = ShoppingIcon;
      iconClassName = styleSheet.shoppingIcon;
      break;
    default:
      IconComponent = DefaultIcon;
      break;
  }


  return (
    <div className="flex items-center">
      <IconComponent className={css(iconClassName, styleSheet.icon)} />
      {props.category}
    </div>
  );
};


const styleSheet = StyleSheet.create({
    icon: {
        fontSize: '16px !important',
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        backgroundColor: '#D9D9D9'
    },
    foodIcon: {
        color: 'green'
    },
    shoppingIcon: {
        color: 'yellow'
    },
    travelIcon: {
        color: '#2F9EDC'
    },
    '@global': {
        '.MuiSvgIcon-root': {
            fontSize: '16px !important',
        },
    },
})


CategoryIcon.propTypes = {
  category: PropTypes.string.isRequired,
};


export default CategoryIcon;

