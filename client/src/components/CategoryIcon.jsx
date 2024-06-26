import FoodIcon from '@mui/icons-material/Fastfood';
import TravelIcon from '@mui/icons-material/AirplanemodeActive';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DirectionsBusFilledTwoToneIcon from '@mui/icons-material/DirectionsBusFilledTwoTone';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const CategoryIcon = (props) => {
  let IconComponent;
  let iconClassName;

  if (!props.category){
    return
  }
  switch (props.category.toLowerCase()) {
    case 'transport':
      IconComponent = DirectionsBusFilledTwoToneIcon;
      iconClassName = styleSheet.transport
      break;
    case 'food':
      IconComponent = FoodIcon;
      iconClassName = styleSheet.foodIcon;
      break;
    case 'travel':
      IconComponent = TravelIcon;
      iconClassName = styleSheet.travelIcon
      break;
    case 'shopping':
      IconComponent = LocalMallIcon;
      iconClassName = styleSheet.shoppingIcon;
      break;
    default:
      IconComponent = AttachMoneyIcon;
      iconClassName = styleSheet.moneyIcon;
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
        backgroundColor: '#D9D9D9',
        margin: "0 5px",
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
    moneyIcon: {
      color: 'blue'
    },
    transport: {
      color: 'brown'
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

