// components/IconExample.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const IconExample = () => (
  <div>
    <FontAwesomeIcon icon={faCode} size="2x" />
    <FontAwesomeIcon icon={faMobileAlt} size="2x" />
  </div>
);

export default IconExample;