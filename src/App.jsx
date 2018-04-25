import React from 'react';

import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import FormAddIcon from 'grommet/components/icons/base/FormAdd';
import FormSubtractIcon from 'grommet/components/icons/base/FormSubtract';

class App extends React.Component {
  constructor() {
    super();
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);

    this.state = {
      counter: 0,
    };
  }

  _increment() {
    this.setState({ counter: (this.state.counter + 1) });
  }

  _decrement() {
    let newValue = this.state.counter - 1;

    if (newValue < 0) {
      newValue = 0;
    }

    this.setState({ counter: newValue });
  }
  render() {
    return (
      <div>
        <Box
          justify="center"
          align="center"
          wrap
          pad="medium"
          margin="small"
          colorIndex="light-2"
          separator="all"
        >
          <Box separator="all" pad="medium">
            <Label><h1>{this.state.counter}</h1></Label>
          </Box>
          <Box
            justify="between"
            align="center"
            direction="row"
            pad="medium"
            margin="small"
          >
            <Box pad="small">
              <Button
                icon={<FormSubtractIcon />}
                label="Decrement"
                onClick={this._decrement}
                primary
              />
            </Box>
            <Box pad="small">
              <Button
                icon={<FormAddIcon />}
                label="Increment"
                onClick={this._increment}
                primary
              />
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}

export default App;
