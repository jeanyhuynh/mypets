import * as icons from 'react-bootstrap-icons';


const Icon = ({ iconName, ...props }) => {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
}
export default Icon;