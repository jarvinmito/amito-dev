import { formatNum } from "@/app/lib/utils/formatters";
import { Table, Text } from "@mantine/core";
import SSSRow, { SSSContribution } from "./SSSRow";

const RATE = 14; // 14% of Employee's Compensation (EC)
const EMPLOYER_SHARE = 9.5; // % Share of employer to the contribution (ER)
const EMPLOYEE_SHARE = 4.5; // % Share of employee to the contribution (EE)
const EMPLOYEE_COMPENSATION = 10; // Shouldered by Employer (ER)
const ROWS = 52;
const STARTING_COMPENSATION = 3750;
const CEILING_RATE_BEFORE_WISP = 19750;
const CEILING_RATE_BEFORE_COMPENSATION = 14250;
const MAX_COMPENSATION = 29750;
const INCREMENT = 500;

// Get Main SS Compensation based on range
// amount is the starting range
const getRegularSSCompensation = (amount: number) =>
  amount >= CEILING_RATE_BEFORE_WISP ? 20000 : amount + 250;

// Get if there is a wisp based on compensation
const getWISP = (amount: number) =>
  amount > CEILING_RATE_BEFORE_WISP ? amount - CEILING_RATE_BEFORE_WISP : 0;

// Get the Employee's Compensation based on salary
const getEC = (amount: number) =>
  amount > CEILING_RATE_BEFORE_COMPENSATION ? 30 : 10;

// Abstraction layer for getting share value based on percentage
const getShare = (amount: number, percentage: number) =>
  amount * (percentage / 100);

// Get Employee's Share to contribution
const getSSEmployeeShare = (amount: number) => getShare(amount, EMPLOYEE_SHARE);

// Get Employer's Share to contribution
const getSSEmployerShare = (amount: number) => getShare(amount, EMPLOYER_SHARE);

// Get Employee's Share to WISP
const getWISPEmployeeShare = (amount: number) =>
  getShare(amount, EMPLOYEE_SHARE);

// Get Employer's Share to WISP
const getWISPEmployerShare = (amount: number) =>
  getShare(amount, EMPLOYER_SHARE);

const generatedTable = Array.from(
  { length: (MAX_COMPENSATION - STARTING_COMPENSATION) / 500 + 1 },
  (_: any, i: number) =>
    !i ? STARTING_COMPENSATION : STARTING_COMPENSATION + i * INCREMENT
);

// Purpose of this function is to identify which compensation range the user belongs to
// with this, we can identify other areas like contribution details
export const findSSSContribution: (amount: number) => SSSContribution = (
  amount
) => {
  // Generate the range based on starting rate and increments
  const whichRateIndex =
    generatedTable.findIndex((range, i) => {
      // If the salary is below 4,250
      if (amount < STARTING_COMPENSATION + INCREMENT)
        return range === STARTING_COMPENSATION;
      // If the salary reaches 29,750 over
      if (amount >= MAX_COMPENSATION) return range === MAX_COMPENSATION;
      // If the salary is in between
      return amount >= range && amount < generatedTable[i + 1];
    }) || 0;

  const whichRate = generatedTable[whichRateIndex];

  // Main Salary based on range
  const salaryCreditRegularSSEmployeeCompensation =
    getRegularSSCompensation(whichRate);

  // WISP if any, baesd on range
  const salaryCreditWISP = getWISP(whichRate);

  const salaryCreditTotal =
    salaryCreditRegularSSEmployeeCompensation + salaryCreditWISP;

  // Regular SS Contribution
  const regularSSEmployeeShare = getSSEmployeeShare(
    salaryCreditRegularSSEmployeeCompensation
  );
  const regularSSEmployerShare = getSSEmployerShare(
    salaryCreditRegularSSEmployeeCompensation
  );
  const regularSSTotal = regularSSEmployeeShare + regularSSEmployerShare;

  // Employee's Compensation Contribution
  const employeeCompensationEmployeeShare = 0;
  const employeeCompensationEmployerShare = getEC(whichRate);
  const employeeCompensationTotal =
    employeeCompensationEmployerShare + employeeCompensationEmployeeShare;

  // WISP
  const wispEmployeeShare = getWISPEmployeeShare(salaryCreditWISP);
  const wispEmployerShare = getWISPEmployerShare(salaryCreditWISP);
  const wispTotal = wispEmployeeShare + wispEmployerShare;

  // Totals
  const totalEmployeeShare =
    regularSSEmployeeShare +
    employeeCompensationEmployeeShare +
    wispEmployeeShare;
  const totalEmployerShare =
    regularSSEmployerShare +
    employeeCompensationEmployerShare +
    wispEmployerShare;

  const totalAll = totalEmployerShare + totalEmployeeShare;

  return {
    salaryRange: whichRate,
    salaryCreditRegularSSEmployeeCompensation,
    salaryCreditWISP,
    salaryCreditTotal,
    employeeCompensationEmployerShare,
    employeeCompensationEmployeeShare,
    employeeCompensationTotal,
    regularSSTotal,
    regularSSEmployeeShare,
    regularSSEmployerShare,
    wispEmployeeShare,
    wispEmployerShare,
    wispTotal,
    totalEmployeeShare,
    totalEmployerShare,
    totalAll,
    index: whichRateIndex,
    maxCompensation: MAX_COMPENSATION,
  };
};

export default function SSSTable() {
  console.log("SSS Table", ROWS);

  return (
    <table className="border border-white text-xs text-center w-full">
      <thead>
        <tr>
          <th rowSpan={3} className="border border-white">
            Compensation Range
          </th>
          <th colSpan={3} className="border border-white">
            Monthly Salary Credit
          </th>
          <th colSpan={9} className="border border-white">
            Amount of Contributions
          </th>
        </tr>
        <tr>
          <td className="border border-white">REG SS</td>
          <td rowSpan={2} className="border border-white">
            WISP
          </td>
          <td rowSpan={2} className="border border-white">
            TOTAL
          </td>
          <td colSpan={3} className="border border-white">
            REG SS
          </td>
          <td colSpan={3} className="border border-white">
            EC
          </td>
          <td colSpan={3} className="border border-white">
            WISP
          </td>
          <td colSpan={3} className="border border-white">
            TOTAL
          </td>
        </tr>
        <tr>
          <td className="border border-white">EC</td>
          <td className="border border-white">ER</td>
          <td className="border border-white">EE</td>
          <td className="border border-white">TOTAL</td>
          <td className="border border-white">ER</td>
          <td className="border border-white">EE</td>
          <td className="border border-white">TOTAL</td>
          <td className="border border-white">ER</td>
          <td className="border border-white">EE</td>
          <td className="border border-white">TOTAL</td>
          <td className="border border-white">ER</td>
          <td className="border border-white">EE</td>
          <td className="border border-white">TOTAL</td>
        </tr>
      </thead>
      <tbody>
        {generatedTable.map((row) => {
          const contribution = findSSSContribution(row);
          return <SSSRow key={`sss-contribution-${row}`} {...contribution} />;
        })}
      </tbody>
    </table>
  );
}
