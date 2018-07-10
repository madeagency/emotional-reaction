import universal from 'react-universal-component'
import Loading from 'components/Loading'

export default universal(() => import('../Examples/Examples'), {
  loading: Loading
})
