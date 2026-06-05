import { Text } from "@mantine/core";
import { formatNum } from "@/app/lib/utils/formatters";

export interface SSSContribution {
  index?: number;
  salaryRange: number;
  salaryCreditRegularSSEmployeeCompensation: number;
  salaryCreditWISP: number;
  salaryCreditTotal: number;
  employeeCompensationEmployerShare: number;
  employeeCompensationEmployeeShare: number;
  employeeCompensationTotal: number;
  regularSSTotal: number;
  regularSSEmployeeShare: number;
  regularSSEmployerShare: number;
  wispEmployeeShare: number;
  wispEmployerShare: number;
  wispTotal: number;
  totalEmployeeShare: number;
  totalEmployerShare: number;
  totalAll: number;
  maxCompensation: number;
}

export default function SSSRow(contribution: SSSContribution) {
  return (
    <tr key={`sss-contribution-${contribution.salaryRange}`}>
      <td className="border border-white p-0.5">
        <Text size="sm">
          {!contribution.index
            ? "Below "
            : `${formatNum(contribution.salaryRange)} - `}
          {contribution.salaryRange >= contribution.maxCompensation
            ? "Over"
            : !contribution.index
            ? formatNum(contribution.salaryRange + 500)
            : formatNum(contribution.salaryRange + 499.99)}
        </Text>
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.salaryCreditRegularSSEmployeeCompensation)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.salaryCreditWISP)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.salaryCreditTotal)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.regularSSEmployerShare)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.regularSSEmployeeShare)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.regularSSTotal)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.employeeCompensationEmployerShare)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.employeeCompensationEmployeeShare)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.employeeCompensationTotal)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.wispEmployerShare)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.wispEmployeeShare)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.wispTotal)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.totalEmployerShare)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.totalEmployeeShare)}
      </td>
      <td className="border border-white p-0.5">
        {formatNum(contribution.totalAll)}
      </td>
    </tr>
  );
}
