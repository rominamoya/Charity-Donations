import red from 'material-ui/colors/red';

const styles = theme => ({
  card: {
    maxWidth: 900,
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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  progress: {
    'text-align': 'center',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export default styles;
