import React, { useState, useEffect } from 'react';
import addIcon from '../../assets/images/addIcon.png';
import searchIcon from '../../assets/images/searchIcon.png';
import styles from './automata.module.css';
import Table from '../../components/Table/Table';
import Automate from './Automate/Automate';
import { Link } from 'react-router-dom';
import coffeMachine from '../../assets/images/machines/coffeMachine.png';
import chargingMachine from '../../assets/images/machines/chargingMachine.png';
import fullGreenConnection from '../../assets/images/connection/fullGreenConnection.png';
import fullRedConnection from '../../assets/images/connection/fullRedConnection.png';
import twoGreenLineConnection from '../../assets/images/connection/twoGreenLineConnection.png';
// import { FormGroup } from '@mui/material';

const Automata = () => {

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 800);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Массив данных с отделами (замените на свои данные)
  const departments = [
    {
      type: coffeMachine,
      location: 'ул. Киевская, д.23',
      name: 'Название 1',
      connection: fullRedConnection,
      powerSupply: 'СвязьЭлектро-питание 1',
      state: 'Состояние 1',
      locationGroup: 'Группа мест 1',
      stockBalance: '30%',
      cash: '1235,90 ₽',
      change: 'Сдача 1',
      monthlySales: '1212',
      monthlySalesCount: '1232',
      lastSale: 'Последняя продажа 1',
      lastVisit: 'Последний визит 1',
      refueling: 'Заправка 1',
    },
    {
      type: chargingMachine,
      location: 'ул. Весенняя, д.25',
      name: 'Название 2',
      connection: twoGreenLineConnection,
      powerSupply: 'СвязьЭлектро-питание 2',
      state: 'Состояние 2',
      locationGroup: 'Группа мест 2',
      stockBalance: '90%',
      cash: '2000 ₽',
      change: 'Сдача 2',
      monthlySales: '9483',
      monthlySalesCount: '2312',
      lastSale: 'Последняя продажа 2',
      lastVisit: 'Последний визит 2',
      refueling: 'Заправка 2',
    },
    {
      type: chargingMachine,
      location: 'ул. Зимняя, д.123',
      name: 'Название 3',
      connection: fullGreenConnection,
      powerSupply: 'СвязьЭлектро-питание 3',
      state: 'Состояние 3',
      locationGroup: 'Группа мест 3',
      stockBalance: '10%',
      cash: '3000 ₽',
      change: 'Сдача 3',
      monthlySales: '9483',
      monthlySalesCount: '3232',
      lastSale: 'Последняя продажа 3',
      lastVisit: 'Последний визит 3',
      refueling: 'Заправка 3',
    },
    {
      type: chargingMachine,
      location: 'ул. Зимняя, д.123',
      name: 'Название 4',
      connection: fullGreenConnection,
      powerSupply: 'СвязьЭлектро-питание 4',
      state: 'Состояние 4',
      locationGroup: 'Группа мест 4',
      stockBalance: '20%',
      cash: '1000 ₽',
      change: 'Сдача 4',
      monthlySales: '9483',
      monthlySalesCount: '4232',
      lastSale: 'Последняя продажа 4',
      lastVisit: 'Последний визит 4',
      refueling: 'Заправка 4',
    },
    {
      type: chargingMachine,
      location: 'ул. Зимняя, д.123',
      name: 'Название 5',
      connection: fullGreenConnection,
      powerSupply: 'СвязьЭлектро-питание 5',
      state: 'Состояние 5',
      locationGroup: 'Группа мест 5',
      stockBalance: '50%',
      cash: '8000 ₽',
      change: 'Сдача 5',
      monthlySales: '9483',
      monthlySalesCount: '5232',
      lastSale: 'Последняя продажа 5',
      lastVisit: 'Последний визит 5',
      refueling: 'Заправка 5',
    },
    {
      type: chargingMachine,
      location: 'ул. Зимняя, д.123',
      name: 'Название 5',
      connection: fullGreenConnection,
      powerSupply: 'СвязьЭлектро-питание 5',
      state: 'Состояние 5',
      locationGroup: 'Группа мест 5',
      stockBalance: '70%',
      cash: '2500 ₽',
      change: 'Сдача 5',
      monthlySales: '9483',
      monthlySalesCount: '5232',
      lastSale: 'Последняя продажа 5',
      lastVisit: 'Последний визит 5',
      refueling: 'Заправка 5',
    },
    {
      type: chargingMachine,
      location: 'ул. Зимняя, д.123',
      name: 'Название 5',
      connection: fullGreenConnection,
      powerSupply: 'СвязьЭлектро-питание 5',
      state: 'Состояние 5',
      locationGroup: 'Группа мест 5',
      stockBalance: '35%',
      cash: '7700 ₽',
      change: 'Сдача 5',
      monthlySales: '9483',
      monthlySalesCount: '5232',
      lastSale: 'Последняя продажа 5',
      lastVisit: 'Последний визит 5',
      refueling: 'Заправка 5',
    },
    {
      type: chargingMachine,
      location: 'ул. Зимняя, д.123',
      name: 'Название 5',
      connection: fullGreenConnection,
      powerSupply: 'СвязьЭлектро-питание 5',
      state: 'Состояние 5',
      locationGroup: 'Группа мест 5',
      stockBalance: '80%',
      cash: '3839 ₽',
      change: 'Сдача 5',
      monthlySales: '9483',
      monthlySalesCount: '5232',
      lastSale: 'Последняя продажа 5',
      lastVisit: 'Последний визит 5',
      refueling: 'Заправка 5',
    },
    {
      type: chargingMachine,
      location: 'ул. Зимняя, д.123',
      name: 'Название 5',
      connection: fullGreenConnection,
      powerSupply: 'СвязьЭлектро-питание 5',
      state: 'Состояние 5',
      locationGroup: 'Группа мест 5',
      stockBalance: '5%',
      cash: '20000 ₽',
      change: 'Сдача 5',
      monthlySales: '9483',
      monthlySalesCount: '5232',
      lastSale: 'Последняя продажа 5',
      lastVisit: 'Последний визит 5',
      refueling: 'Заправка 5',
    },
    {
      type: chargingMachine,
      location: 'ул. Зимняя, д.123',
      name: 'Название 5',
      connection: fullGreenConnection,
      powerSupply: 'СвязьЭлектро-питание 5',
      state: 'Состояние 5',
      locationGroup: '25%',
      stockBalance: 'Остаток товара 5',
      cash: '13000 ₽',
      change: 'Сдача 5',
      monthlySales: '9483',
      monthlySalesCount: '5232',
      lastSale: 'Последняя продажа 5',
      lastVisit: 'Последний визит 5',
      refueling: 'Заправка 5',
    },
    // Остальные отделы...
  ];

  return <div className={styles.automates}>
    {isLargeScreen ? <>
      <div className={styles.header_wrapper}>
        <div className={styles.header_left}>
          <h2 className={styles.automates_title}>Автоматы</h2>
          <div className={styles.automates_and_vendings_title}>
            <span className={styles.title_vending}>Вендинг </span> | <span> Автоматы</span>
          </div>
          <Link to='create_automata'>
            <button className={styles.create_automate}>
              <img src={addIcon} className={styles.add_icon} alt='add icon' />
              Добавить новый автоматы
            </button>
          </Link>
        </div>
        <div className={styles.header_right}>
          <select className={`${styles.performance} ${styles.automates_filter_select}`}>
            <option selected>Все автоматы</option>
            <option>Кофейные автоматы</option>
            <option>Цветочные автоматы </option>
            <option>Зарядные автоматы</option>
            <option>Требуется внимание</option>
            <option>Автоматы без неполадок </option>
          </select>
          <select className={`${styles.location_select} ${styles.automates_filter_select}`}>
            <option>Локации</option>
            <option>где-то</option>
            <option>что-то </option>
          </select>
          {/* <p className='filter'>
             <FormGroup>
          <FormControlLabel
            label='Фильтры'
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          />
        </FormGroup> 
        </p>*/}
          <div>
            <span className={styles.filtrs}>Фильтры</span>
            <input type='checkbox' id='toggle' className={styles.toggle_checkbox} />
            <label for='toggle' className={styles.toggle_label}></label>
          </div>
          <div className={styles.searchWrapper}>
            <input className={styles.search} />
            <img className={styles.searchIcon} src={searchIcon} alt='search icon' />
          </div>
        </div>
      </div >
      <Table departments={departments} />
    </> : <>
      <div className={styles.searchWrapper}>
        <input className={styles.search} />
        <img className={styles.searchIcon} src={searchIcon} alt='search icon' />
      </div>
      <div className={styles.header_wrapper}>
        <div className={styles.title_and_filtr_toggle}>
          <div className={styles.automates_and_vendings_title}>
            <span className={styles.title_vending}>Вендинг </span> | <span> Автоматы</span>
          </div>
          <div className={styles.filtrs_toggle}>
            <input type='checkbox' id='toggle' className={styles.toggle_checkbox} />
            <label for='toggle' className={styles.toggle_label}></label>
            <span className={styles.filtrs}>Фильтры</span>
          </div>
        </div>
        <div className={styles.automates_filter_selects}>
          <select className={`${styles.performance} ${styles.automates_filter_select}`}>
            <option selected>Все автоматы</option>
            <option>Кофейные автоматы</option>
            <option>Цветочные автоматы </option>
            <option>Зарядные автоматы</option>
            <option>Требуется внимание</option>
            <option>Автоматы без неполадок </option>
          </select>
          <select className={`${styles.location_select} ${styles.automates_filter_select}`}>
            <option>Локации</option>
            <option>где-то</option>
            <option>что-то </option>
          </select>
        </div>
      </div>
      {departments.map(automate => <Automate department={automate} />)}
    </>
    }
    <button className={styles.create_automate_mobile}>+</button>
  </div >
};

export default Automata;