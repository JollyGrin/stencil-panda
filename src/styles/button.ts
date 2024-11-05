import { cva } from '../../styled-system/css';

export const button = cva({
  base: {
    display: 'flex',
    bg: 'blue.500',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    transition: 'all 0.25s ease',
    _hover: {
      bg: 'blue.400',
    },
  },

  variants: {
    visual: {
      solid: { bg: 'purple.300', color: 'black' },
      outline: { borderWidth: '1px', borderColor: 'red.200', bg: 'blue' },
      disabled: { opacity: 0.5, cursor: 'not-allowed' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' },
    },
  },
});
