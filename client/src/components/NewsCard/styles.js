import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  media: {
    height: 250,
  },

  border: {
    border: 'solid',
  },

  fullHeightCard: {
    height: '100%',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid white',
    boxShadow: 'box-shadow: 1px 1px 10px 0 #eee'
  },

  activeCard: {
    borderBottom: '10px solid #22289a',
  },

  grid: {
    display: 'flex',
  },

  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },

  title: {
    padding: '8px 16px',
  },

  cardActions: {
    padding: '10px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
})

export default styles;