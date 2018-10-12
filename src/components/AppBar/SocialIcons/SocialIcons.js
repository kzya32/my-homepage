import React from 'react';

import SocialIcon from './SocialIcon/SocialIcon';

class SocialIcons extends React.PureComponent {
  render() {
    const iconStyle={
      fontSize: 48,
    };

    return (
      <div style={this.props.style}>
        {this.props.icons.map((icon)=>{
          return (
            <SocialIcon
              name={icon.name}
              color={icon.color}
              link={icon.link}
              iconStyle={iconStyle}
              key={icon.color}
            />
          )
        })}
      </div>
    )
  }
}

export default SocialIcons;
