import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [source, setSource] = useState('');
  const [published, setPublished] = useState('');
  const [url, setURL] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, summary, source, published, url);
    handleClose();
  };

  return (
    <div>
      <h1 style={{
        textTransform: "capitalize", fontSize: "35px", padding: "50px",
        marginBottom: "-20px",
        color: 'rgb(46, 138, 224)',
      }}>Add News Article Form</h1>
      <form className={classes.root} onSubmit={handleSubmit} style={{
        // padding: "50px",
        // marginBottom: "-20px",
      }}>
        <TextField
          required
          id="title"
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          required
          id="summary"
          label="Summary"
          variant="outlined"
          value={summary}
          onChange={e => setSummary(e.target.value)}
        />
        <TextField
          required
          id="source"
          label="Source"
          variant="outlined"
          value={source}
          onChange={e => setSource(e.target.value)}
        />
        <TextField
          required
          id="published"
          label="Published At"
          variant="outlined"
          value={published}
          onChange={e => setPublished(e.target.value)}
        />
        <TextField
          required
          id="url"
          label="URL"
          variant="outlined"
          value={url}
          onChange={e => setURL(e.target.value)}
        />
        <div style={{ paddingTop: '30px' }}>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" style={{
            backgroundColor: 'rgb(46, 138, 224)',
            color: '#FFFFFF',
          }}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;


// id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
// title VARCHAR(100) NOT NULL,
// summary VARCHAR(100) NOT NULL,
// source VARCHAR(100) NOT NULL,
// published_at DATE NOT NULL,
// url_site VARCHAR(100) NOT NULL

