// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'profile manager',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'vehicle ops',
    path: '/dashboard/products',
    icon: icon('ic_car'),
  },
  {
    title: 'plate manager',
    path: '/dashboard/blog',
    icon: icon('ic_mixer'),
  },
  {
    title: 'payment',
    path: '/404',
    icon: icon('ic_payment'),
  },
  {
    title: 'report',
    path: '/404',
    icon: icon('ic_report'),
  },
  {
    title: 'tax net',
    path: '/404',
    icon: icon('ic_tax'),
  },
  {
    title: 'document',
    path: '/404',
    icon: icon('ic_folder'),
  },
  {
    title: 'user manager',
    path: '/404',
    icon: icon('ic_users'),
  },
  {
    title: 'setting',
    path: '/404',
    icon: icon('ic_settings'),
  },


];

export default navConfig;
