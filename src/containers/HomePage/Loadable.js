/**
 *
 * Asynchronously loads the component for HealthTipsCard
 *
 */

 import Loadable from 'react-loadable'

 export default Loadable({
   loader: () => import('./index'),
   loading: () => null
 })
 