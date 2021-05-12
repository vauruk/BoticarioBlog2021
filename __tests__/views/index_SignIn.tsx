/**
 * @format
 */

import 'react-native';
import React from 'react';
import { SignIn } from '../../src/views';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<SignIn />).toJSON();
    expect(tree).toMatchSnapshot();
});

// it('renders correctly', () => {
//     renderer.create(<SignIn />);
// });
