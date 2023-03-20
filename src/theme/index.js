import { createTheme } from '@mui/material';

const myBreakpoints = {
  values: {
    xs: 0,
    sm: 320,
    md: 768,
    lg: 1024,
    xl: 1920,
  },
};

const { breakpoints } = createTheme({ breakpoints: myBreakpoints })

const palette = {
  primary: {
    main: '#FFFFFF',
    secondary: '#FAFBFC',
    third: '#F9F9F9'
  },
  secondary: {
    main: '#06BBEE',
    secondary: '#0B74BA',
    third: '#79BAD1',
    fourth: '#AEDBEA',
    fifth: '#84E3FF',
    sixth: '#00B4EA'
  },
  text: {
    h2: '#3B3B3A;',
    placeholder: '#DDE6E7',
    placeholder2: 'rgba(0, 0, 0, 0.5)',
    lightLink: '#9C9D9D',
    accent: '#000000',
    subAccent: '#000003',
    caption: '#454544',
    label: 'rgba(0, 0, 0, 0.7)',
    button: '#FFFFFF',
    link: '#9C9D9D'
  },
  border: {
    main: '#ECECEC',
    secondary: '#FDFBF4',
    third: '#9C9D9D',
  }
};

const typography = {
  fontFamily: ['Montserrat', 'Calibri', 'Tahoma'],
  h1: {
    color: palette.text.accent,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '22px',
  },
  titleBig: {
    color: palette.text.accent,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '20.7868px',
    lineHeight: '25px',
  },
  label: {
    color: palette.text.label,
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16.1675px',
    lineHeight: '20px',
  },
  h2: {
    color: palette.text.h2,
    fontFamily: 'Tahoma',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '8px',
    lineHeight: '10px',
    [breakpoints.up('md')]: {
      fontSize: '12px',
      lineHeight: '15px',
    },
  },
  placeholder: {
    color: palette.text.placeholder,
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '17px',
    [breakpoints.down('md')]: {
      fontSize: '12px',
      lineHeight: '15px',
    },
  },
  placeHolder2: {
    color: palette.text.placeholder,
    fontfamily: 'Montserrat',
    fontstyle: 'normal',
    fontweight: 500,
    fontsize: '13.8579px',
    lineheight: '17px',
  },
  button: {
    color: palette.text.button,
    fontFamily: 'Calibri',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '9px',
    lineHeight: '11px',
    [breakpoints.up('md')]: {
      fontSize: '13px',
      lineHeight: '16px',
    },
  },
  menuItem: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '24px',
  },
  menuSubItem: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '10px',
    lineHeight: '12px',
  },
};





export const theme = createTheme({
  palette,
  typography,
  breakpoints: myBreakpoints,
  components: {
    MuiButton: {
      style: { ...typography.button },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: palette.secondary.third,
            color: palette.primary.main,
            padding: '7px', borderRadius: '0px', textTransform: 'none'
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            background: 'transparent',
            color: palette.secondary.third,
            border: `2px solid ${palette.secondary.third}`,
            padding: '6px', borderRadius: '0px', textTransform: 'none',
            '&:hover': {
              border: `2px solid ${palette.secondary.third}`
            }
          },
        },
      ],
    },


  },

});

