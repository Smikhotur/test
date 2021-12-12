import React from "react";
import moment from 'moment';
import './App.css';

function App() {
  const months = moment.monthsShort();

  const createMonthForSelect = (month, index) => {
    const startMonth = moment().month(index).startOf('month').format('DD-YYYY').replace('-', ` ${month} `);
    const endMonth = moment().month(index).endOf('month').format('DD-YYYY').replace('-', ` ${month} `);

    return `${startMonth} - ${endMonth}`
  }

  return (
    <div className="app">
      <select className="select">
        {months.map((month, index) => (
          <option key={month} value={month}>{createMonthForSelect(month, index)}</option>
        ))};
      </select>
    </div>
  );
}

export default App;
