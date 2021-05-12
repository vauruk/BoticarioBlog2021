/**
 * @format
 */

import 'react-native';
import React from 'react';
import { ContainerVK } from '../../src/components/';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// test('renders correctly', () => {
//     const tree = renderer.create(<ContainerVK />).toJSON();
//     expect(tree).toMatchSnapshot();
// });

it('renders correctly', () => {
    renderer.create(<ContainerVK />);
});
