"use client";

import { formatNum } from "@/app/lib/utils/formatters";
import {
  Container,
  Fieldset,
  NumberInput,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMemo, useState } from "react";
import SSSTable, { findSSSContribution } from "./SSSTable";

enum TAX_VALUES {
  TIER1 = 0,
  TIER2 = 250000,
  TIER3 = 400000,
  TIER4 = 800000,
  TIER5 = 2000000,
  TIER6 = 8000000,
}

// Tax table based on income
const TAX_TABLE = {
  [TAX_VALUES.TIER1]: [0, 0],
  // over 250,000 annual income pays 0 + 20% excess of 250,000
  [TAX_VALUES.TIER2]: [0, 20],
  // over 400,000 annual income pays 30,000 + 25% excess of 400,000
  [TAX_VALUES.TIER3]: [30000, 25],
  [TAX_VALUES.TIER4]: [130000, 30],
  [TAX_VALUES.TIER5]: [490000, 32],
  [TAX_VALUES.TIER6]: [2410000, 35],
};

const getTaxTier = (amount: number) => {
  if (amount > TAX_VALUES.TIER6) return TAX_VALUES.TIER6;
  if (amount > TAX_VALUES.TIER5) return TAX_VALUES.TIER5;
  if (amount > TAX_VALUES.TIER4) return TAX_VALUES.TIER4;
  if (amount > TAX_VALUES.TIER3) return TAX_VALUES.TIER3;
  if (amount > TAX_VALUES.TIER2) return TAX_VALUES.TIER2;
  if (amount > TAX_VALUES.TIER1) return TAX_VALUES.TIER1;
  return 0;
};

// Philhealth rates
enum PH_VALUES {
  TIER1 = 0,
  TIER2 = 1,
  TIER3 = 10000,
  TIER4 = 100000,
}

const PH_TABLE = {
  [PH_VALUES.TIER1]: [0, 0],
  [PH_VALUES.TIER2]: [500, 0],
  [PH_VALUES.TIER3]: [0, 5],
  [PH_VALUES.TIER4]: [5000, 0],
};

const getPhilHealthTier = (amount: number) => {
  if (amount >= PH_VALUES.TIER4) return PH_VALUES.TIER4;
  if (amount >= PH_VALUES.TIER3) return PH_VALUES.TIER3;
  if (amount > PH_VALUES.TIER2) return PH_VALUES.TIER2;
  return PH_VALUES.TIER1;
};

// Pagibig rates
enum PI_VALUES {
  TIER1 = 0,
  TIER2 = 1,
  TIER3 = 1500,
  TIER4 = 10000,
}

const PI_TABLE = {
  [PI_VALUES.TIER1]: [0, 0],
  [PI_VALUES.TIER2]: [0, 1],
  [PI_VALUES.TIER3]: [0, 2],
  [PI_VALUES.TIER4]: [200, 0],
};

const getPagIbigTier = (amount: number) => {
  if (amount >= PI_VALUES.TIER4) return PI_VALUES.TIER4;
  if (amount >= PI_VALUES.TIER3) return PI_VALUES.TIER3;
  if (amount > PI_VALUES.TIER2) return PI_VALUES.TIER2;
  return PI_VALUES.TIER1;
};

export default function TaxCalculator() {
  // Set income, will come from user input or 0
  const [income, setIncome] = useState<string | number>("");
  const [allowDeductions, setAllowDeductions] = useState(true);

  // Get SSS contribution
  const sssContribution = useMemo(() => findSSSContribution(+income), [income]);

  // Get the PhilHealth deduction based on salary
  const philHealth = useMemo(() => {
    const tier = getPhilHealthTier(+income);
    const [rate, percentage] = PH_TABLE[tier];
    return rate + (+income * percentage) / 100;
  }, [income]);

  // Get the Pag-ibig deduction based on salary
  const pagIbig = useMemo(() => {
    const tier = getPagIbigTier(+income);
    const [rate, percentage] = PI_TABLE[tier];
    return rate + (+income * percentage) / 100;
  }, [income]);

  // Get all total contributions
  const contributions = useMemo(
    () => philHealth + pagIbig + sssContribution.totalEmployeeShare,
    [sssContribution.totalEmployeeShare, philHealth, pagIbig]
  );
  const taxableIncome = +income - contributions;

  // Compute annual income based on monthly income
  const annualTaxableIncome = useMemo(
    () => +taxableIncome * 12,
    [taxableIncome]
  );

  // Compute tax based on annual income and tax table
  const tax = useMemo(() => {
    const tier = getTaxTier(annualTaxableIncome);
    const [initial, percentage] = TAX_TABLE[tier];
    return (initial + ((annualTaxableIncome - tier) * percentage) / 100) / 12; // convert to monthly
  }, [annualTaxableIncome]);

  // Get total deductions
  const totalDeductions = contributions + tax;

  // Get income after tax
  const incomeAfterTax = +income - tax;

  // Get the net income
  const netIncome = +income - totalDeductions;

  console.log("SSS Contribution", sssContribution);

  return (
    <Container fluid mx="auto">
      <h1 className="text-3xl mb-6">Tax Calculator 2024</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8">
          <Stack gap="sm">
            <NumberInput
              size="lg"
              radius="lg"
              label={
                <Text lh="sm" fw="bold">
                  Monthly Gross Income
                </Text>
              }
              description={
                <Text size="xs" c="dimmed">
                  The amount of money I earn for each month
                </Text>
              }
              prefix="₱"
              placeholder="₱25,000"
              thousandSeparator=","
              min={0}
              value={income}
              onChange={setIncome}
            />

            {allowDeductions ? (
              <div>
                <Fieldset
                  legend={
                    <Text size="md" fw="bold">
                      Contributions
                    </Text>
                  }
                  radius="lg"
                >
                  <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
                    <div>
                      <Text lh="xs" c="dimmed">
                        SSS
                      </Text>
                      <Text className="text-2xl">
                        {formatNum(sssContribution.totalEmployeeShare)}
                      </Text>
                    </div>
                    <div>
                      <Text lh="xs" c="dimmed">
                        PhilHealth
                      </Text>
                      <Text className="text-2xl">{formatNum(philHealth)}</Text>
                    </div>
                    <div>
                      <Text lh="xs" c="dimmed">
                        PAG-IBIG
                      </Text>
                      <Text className="text-2xl">{formatNum(pagIbig)}</Text>
                    </div>
                    <div>
                      <Text lh="xs">Total Contributions</Text>
                      <Text className="text-2xl" c="lime.4">
                        {formatNum(contributions)}
                      </Text>
                    </div>
                  </SimpleGrid>
                </Fieldset>
              </div>
            ) : null}

            <div>
              <Fieldset
                legend={
                  <Text size="md" fw="bold">
                    Tax Computation
                  </Text>
                }
                radius="lg"
              >
                <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }}>
                  <div>
                    <Text lh="xs">Taxable Income</Text>
                    <Text size="xs" lh="xs" c="dimmed">
                      My gross income - total contributions
                    </Text>
                    <Text className="text-2xl">{formatNum(taxableIncome)}</Text>
                  </div>
                  <div>
                    <Text lh="xs">Tax</Text>
                    <Text size="xs" lh="xs" c="dimmed">
                      Amount that goes to the government
                    </Text>
                    <Text className="text-2xl font-bold" c="lime.4">
                      {formatNum(tax)}
                      {!tax ? " - Exempted" : null}
                    </Text>
                  </div>
                  <div>
                    <Text lh="xs">Income after Tax</Text>
                    <Text size="xs" lh="xs" c="dimmed">
                      My taxable income - tax
                    </Text>
                    <Text className="text-2xl">
                      {formatNum(incomeAfterTax)}
                    </Text>
                  </div>
                </SimpleGrid>
              </Fieldset>
            </div>

            <Fieldset
              legend={
                <Text size="md" fw="bold">
                  Final Pay Computation
                </Text>
              }
              radius="lg"
            >
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <div>
                  <Text lh="xs">Deductions</Text>
                  <Text size="xs" lh="xs" c="dimmed">
                    My tax + total contributions
                  </Text>
                  <Text className="text-2xl" c="lime.4">
                    {formatNum(totalDeductions)}
                  </Text>
                </div>
                <div>
                  <Text lh="xs">Net Income</Text>
                  <Text size="xs" lh="xs" c="dimmed">
                    My actual take home pay
                  </Text>
                  <Text className="text-4xl font-bold" c="lime.4">
                    {formatNum(netIncome)}
                  </Text>
                </div>
              </SimpleGrid>
            </Fieldset>
          </Stack>
        </div>
        <div className="col-span-8"></div>
      </div>
      {/* <SSSTable /> */}
    </Container>
  );
}
