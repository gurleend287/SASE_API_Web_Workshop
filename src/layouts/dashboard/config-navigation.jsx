import SvgColor from 'src/components/svg-color';
import PersonIcon from '@mui/icons-material/Person';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Top Artists',
    path: '/',
    icon: <PersonIcon/>,
  },
  {
    title: 'Top Tracks',
    path: '/products2',
    icon: <LibraryMusicIcon/>,
  },
];

export default navConfig;
