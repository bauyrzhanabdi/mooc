import {FormControl} from "react-bootstrap";
import * as React from "react";
import styles from './catalog.module.scss';
import withAuth from "../../hoc/withAuth";
const Catalog = () => {
    return (
        <div className={styles.catalog_search_bar}>
            <div className={styles.searchinput}>
                {/*<i className="fa fa-search"></i>*/}
                <FormControl
                    className={styles.searchbar}
                    placeholder="Search course by name or prof"
                    aria-label="search course"
                    aria-describedby="basic-addon1"
                />
            </div>
            <div className={'d-flex justify-content-between w-75'}>
                {/*<label for={'school'}>School</label>*/}
                <div className={'d-flex align-items-center'}>
                    <select name={'school'} className={styles.school_dropdown}>
                        <option disabled selected value>Any school</option>
                        <option value={'SEDS'}>SEDS</option>
                        <option value={'SHSS'}>SHSS</option>
                        <option value={'SMG'}>SMG</option>
                        <option value={'GSB'}>GSB</option>
                    </select>
                    <div>
                        &emsp;
                        <input name='fully' type={'checkbox'}/>
                        &emsp;
                        <label for='fully'>Fully finished</label>
                    </div>
                </div>
                <div>
                    <button className={styles.searchbutton}>Search</button>
                </div>
            </div>
        </div>
    )
}
export default withAuth(Catalog);