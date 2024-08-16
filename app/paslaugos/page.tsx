// Example test page: /pages/test.tsx
import React from 'react';
import Icon from '../components/Icon';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const TestPage: React.FC = () => (
  <div className="p-4">
    <Icon icon={faCode} size="3x" color="blue" />
  </div>
);

export default TestPage;