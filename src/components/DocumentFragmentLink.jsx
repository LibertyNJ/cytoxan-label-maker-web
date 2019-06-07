import PropTypes from 'prop-types';
import React from 'react';

export default class DocumentFragmentLink extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: undefined,
  };

  componentDidMount = () => {
    this.documentFragment = document.querySelector(this.props.href);
  };

  handleLinkClick = (event) => {
    event.preventDefault();
    this.scrollToDocumentFragment();
  };

  scrollToDocumentFragment = () => this.documentFragment.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  render = () => (
    <a className={this.props.className} href={this.props.href} onClick={this.handleLinkClick}>
      {this.props.children}
    </a>
  );
}
