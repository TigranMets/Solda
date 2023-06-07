import React, { useState } from "react";
import styles from './table.module.css';
import TableRow from './TableRow/TableRow';

const Table = ({ departments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Количество элементов на странице

  // Вычисление общего количества страниц
  const totalPages = Math.ceil(departments.length / itemsPerPage);

  // Получение данных для текущей страницы
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = departments.slice(indexOfFirstItem, indexOfLastItem);

  // Обработчик смены страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const renderPaginationButtons = () => {
    const buttons = [];

    for (let i = 1; i <= 3; i++) {
      buttons.push(
        <div>
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? styles.button_page_active : styles.button_page}
          >
            {i}
          </button>
        </div >
      );
    }

    return buttons;
  };

  return (
    <div>
      <table className={styles.automates_table}>
        <thead>
          <tr>
            <th>Тип</th>
            <th>Название</th>
            <th>Связь</th>
            <th>Состояние</th>
            <th>Электро-питание</th>
            <th>Группа мест</th>
            <th>Остаток товара</th>
            <th>Наличные</th>
            <th>Сдача</th>
            <th>Продажи за месяц</th>
            <th>Число продаж за месяц</th>
            <th>Последняя продажа</th>
            <th>Последний визит</th>
            <th>Заправка</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((department, index) => <TableRow key={index} department={department} />)}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <svg
          width="13"
          height="18"
          viewBox="0 0 13 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1094 2.0625L3.05518 9.00008L11.0005 16.0621"
            stroke="#0B74BA"
            stroke-width="4"
          />
        </svg>
        {renderPaginationButtons()}
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 16L10 9L2 2" stroke="#0B74BA" stroke-width="4" />
        </svg>
      </div>
    </div>
  );
};

export default Table;
