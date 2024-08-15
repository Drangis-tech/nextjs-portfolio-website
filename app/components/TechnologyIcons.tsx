import { faCode, faPalette, faBullhorn, faChartLine, faLaptopCode, faUserCog, faServer, faCloud, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Define the mapping of technology names to icons
const technologyIcons: { [key: string]: IconDefinition } = {
  React: faCode,
  'Vue.js': faCode,
  WordPress: faPalette,
  PHP: faServer,
  'Node.js': faLaptopCode,
  AWS: faCloud,
  Docker: faDatabase,
  MySQL: faDatabase,
};

export default technologyIcons;