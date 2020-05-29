import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';

const Greeter = ({ name }) => <p>Greetings, {name}!</p>;

Greeter.propTypes = { name: PropTypes.string.isRequired };

const Root = () => <Greeter name="Bob" />;
export default hot(Root);
