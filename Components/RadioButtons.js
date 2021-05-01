import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import qstn from './Database'

export default function ErrorRadios() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const [i, seti] = useState(0);
  const cv = qstn[i].ca;
  

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };
  
//setTimeout(function(){ alert("Hello"); }, 3000);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === cv) {
      setHelperText('You got it!');
      setError(false);
      setTimeout(function(){seti(i + 1) }, 2000);
    } else if (qstn[i].ba.includes(value)) {
      setHelperText('Sorry, wrong answer!');
      setError(true);
      setTimeout(function(){seti(i + 1) }, 2000);
    }  else {
      setHelperText('Please select an option.');
      setError(true);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} >
      <FormHelperText>Choose one answer please</FormHelperText>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="a" control={<Radio color="primary"/>} label={qstn[i].a} />
          <FormControlLabel value="b" control={<Radio color="primary"/>} label={qstn[i].b} />
          <FormControlLabel value="c" control={<Radio color="primary"/>} label={qstn[i].c} />
          <FormControlLabel value="d" control={<Radio color="primary"/>} label={qstn[i].d} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="primary" >
          Check Answer
        </Button>
      </FormControl>
    </form>
  );
}