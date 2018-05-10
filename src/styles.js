const styles = theme => ({
  card: {
    maxWidth: 500,
    margin: 'auto',
  },
  media: {
    height: 194,
    'background-size': 'contain',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  chip: {
    margin: theme.spacing.unit / 2,
    color: theme.palette.text.secondary,
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  progress: {
    'text-align': 'center',
  },
});

export default styles;
