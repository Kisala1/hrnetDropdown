import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    name: 'Test',
    options: ['option1', 'option2', 'option3', 'option4', 'option5'],
  },
};

export const Default = {};
export const PrimaryBold = {
  args: {
    labelStyle: {
      marginBottom: '10px',
      fontSize: '20px',
      fontWeight: '700',
    },
    selectStyle: {
      cursor: 'pointer',
      padding: '5px 10px',
      fontSize: 'medium',
      backgroundColor: '#fff',
      borderRadius: '5px',
    },
  },
};
export const SecondaryBold = {
  args: {
    labelStyle: {
      marginBottom: '10px',
      fontSize: '20px',
      fontWeight: '700',
    },
    selectStyle: {
      cursor: 'pointer',
      padding: '5px 10px',
      fontSize: 'medium',
      color: '#fff',
      backgroundColor: '#000',
      borderRadius: '5px',
    },
  },
};

export const Small = {
  args: {
    containerStyle: {
      display: 'flex',
      flexDirection: 'column',
      width: '700px',
    },
    labelStyle: {
      marginBottom: '10px',
      fontSize: '20px',
      fontWeight: '700',
    },
    selectStyle: {
      cursor: 'pointer',
      padding: '5px 10px',
      fontSize: 'medium',
      backgroundColor: '#fff',
      borderRadius: '5px',
    },
  },
};

Dropdown.defaultProps = {
  name: 'Test',
};
