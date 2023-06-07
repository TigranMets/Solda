import React from 'react';
import styles from './TableRow.module.css';

const TableRow = ({ department }) => {
    return <tr className={styles.department}>
        <td><img src={department.type} className={styles.type} alt='machine' /></td>
        <td>
            <p className={styles.name}>{department.name}</p>
            <p className={styles.location}>{department.location}</p>
        </td>
        <td><img src={department.connection} alt='connenction' /></td>
        <td>{department.state}</td>
        <td>{department.powerSupply}</td>
        <td>{department.locationGroup}</td>
        <td>{department.stockBalance}</td>
        <td>{department.cash}</td>
        <td>{department.change}</td>
        <td>{department.monthlySales}</td>
        <td>{department.monthlySalesCount}</td>
        <td>{department.lastSale}</td>
        <td>{department.lastVisit}</td>
        <td>{department.refueling}</td>
    </tr >
};

export default TableRow;
