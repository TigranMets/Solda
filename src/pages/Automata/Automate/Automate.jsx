import React from 'react';
import styles from './Automate.module.css';

const Automata = ({ department }) => {
    return <div className={styles.automate}>
        <div className={styles.automate_information_top}>
            <img className={styles.type} src={department.type} alt='machine' />
            <div>
                <p className={styles.name}>{department.name}</p>
                <span className={styles.location}>{department.location}</span>
            </div>
            <img src={department.connection} alt='connection' />
            <img src='' alt='' />
            <img src='' alt='' />
            <span className={styles.cash}>{department.cash}</span>
        </div>
        <div className={styles.automate_information_bottom}>
            <div className={styles.automate_information_item}>
                <p className={styles.information_key}>Число продаж за месяц</p>
                <p className={styles.information_value}>{department.monthlySalesCount}</p>
            </div>
            <div className={styles.automate_information_item}>
                <p className={styles.information_key}>Продажи за месяц</p>
                <p className={styles.information_value}>{department.monthlySales}</p>
            </div>
            <div className={styles.automate_information_item}>
                <p className={styles.information_key}>Наличные</p>
                <p className={styles.information_value}>{department.cash}</p>
            </div>
            <div className={styles.automate_information_item}>
                <p className={styles.information_key}>Сдача</p>
                <p className={styles.information_value}>{department.change}</p>
            </div>
            <div className={styles.automate_information_item}>
                <p className={styles.information_key}>Остаток товара</p>
                <p className={styles.information_value}>{department.stockBalance}</p>
            </div>
            <div className={styles.automate_information_item}>
                <p className={styles.information_key}>Заправка</p>
                <p className={styles.information_value}>{department.refueling}</p>
            </div>
            <div className={styles.automate_information_item}>
                <p className={styles.information_key}>Последний визит</p>
                <p className={styles.information_value}>{department.lastVisit}</p>
            </div>
        </div>
    </div>
};

export default Automata;
