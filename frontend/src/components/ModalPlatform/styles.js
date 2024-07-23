// styles.js

const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  modal: {
    width: '73%',
    margin: '0 auto',
    padding: '3rem',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '22px'
  },
  exit: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  exit__btn: {
    cursor: 'pointer'
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title__text: {
    fontWeight: '400',
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '3rem'
  },
  platforms: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  },
  platformContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  platform: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#000'
  },
  platformImage: {
    width: '80px',
    height: '80px',
    marginBottom: '0.5rem'
  }
}

export default styles
