import React, {Component} from 'react';
import classNames from 'classnames';
import './hello.less';

class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: true
    }
  }

  render() {
    const {active} = this.state;
    const itemClass = classNames({
      completed: !active
    });
    return <div>
      <input type="checkbox" onChange={()=> {
        this.setState({active: !active})
      }}/>
      <span className={itemClass}>Hello world!</span>
    </div>;
  }

}

export default Hello;