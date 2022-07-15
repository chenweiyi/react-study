/*
 * @Author: 陈潍溢
 * @Date: 2022-07-15 10:19:55
 * @LastEditors: 陈潍溢
 * @LastEditTime: 2022-07-15 11:38:39
 * @Description:
 */
import styles from './index.less'
import { Link } from 'umi'

export default function IndexPage () {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to='/callback'>UseCallback Demo</Link>
    </div>
  )
}
