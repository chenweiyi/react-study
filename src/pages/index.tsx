/*
 * @Author: 陈潍溢
 * @Date: 2022-07-15 10:19:55
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-18 15:45:02
 * @Description:
 */
import styles from './index.less'
import { Link } from 'umi'

export default function IndexPage () {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to='/callback'>UseCallback Demo</Link>
      <br />
      <Link to='/should-component-update'>shouldComponentUpdate</Link>
    </div>
  )
}
